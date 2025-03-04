import { useState, useEffect } from "react";
// @ts-ignore
import { supabase } from "../supabase";

export function useUserData() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  const [team, setTeam] = useState<string>("");
  const [teamID, setTeamID] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [teammates, setTeammates] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem("user_email");
    if (storedEmail) {
      setEmail(storedEmail);
      fetchUserData(storedEmail);
    } else {
      fetchUserEmail();
    }
  }, []);

  const fetchUserEmail = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.getUser();
      
      if (error) throw error;
      
      if (data?.user) {
        const userEmail = data.user.email ?? "";
        setEmail(userEmail);
        localStorage.setItem("user_email", userEmail);
        await fetchUserData(userEmail);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch user email");
      console.error("Error fetching user email:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserData = async (userEmail: string) => {
    if (!userEmail) return;
    
    try {
      setIsLoading(true);
      
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("email", userEmail)
        .maybeSingle();
        
      if (userError) throw userError;
      if (!userData) {
        console.log("No user data found");
        return;
      }
      
      const { data: teamData, error: teamError } = await supabase
        .from("teams")
        .select("*")
        .eq("id", userData.team_id)
        .maybeSingle();
        
      if (teamError) throw teamError;
      
      const { data: teammatesData, error: teammateError } = await supabase
        .from("users")
        .select("*")
        .eq("team_id", userData.team_id);
        
      if (teammateError) throw teammateError;
      
      setName(userData.preferred_name || "");
      setTeam(teamData?.team_name || "");
      setMajor(userData.major || "");
      setTeamID(userData.team_id || "");
      setYear(userData.year?.toString() || "");
      
      const teammateNames = teammatesData
        ? teammatesData.map((teammate: any) => teammate.name)
        : [];
      setTeammates(teammateNames);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch user data");
      console.error("Error fetching user data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    name,
    major,
    team,
    teamID,
    year,
    teammates,
    isLoading,
    error,
    fetchUserData
  };
}