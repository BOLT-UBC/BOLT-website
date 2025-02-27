import React, { useEffect, useState } from "react";
import { supabase } from '../supabase'; 
import PortalBoxWidget from "../components/PortalBoxWidget";
import "./Dashboard.css"
import Countdown from "../components/Countdown";

interface User {
    email: string;
    name: string;
    accepted: boolean;
    major: string;
    year: number;
    team_id: number;
}


export default function Dashboard() {
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [major, setMajor] = useState<string>("");
    const [team, setTeam] = useState<string>("");
    const [teamID, setTeamID] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [teammates, setTeammates] = useState<string[]>([]);

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
        const { data, error } = await supabase.auth.getUser();
        if (!error && data?.user) {
          setEmail(data.user.email ?? "");
          localStorage.setItem("user_email", data.user.email ?? "");
          fetchUserData(data.user.email ?? "");
        }
      };
    
    const fetchUserData = async (userEmail: string) => {
    try {
        const { data: userData, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("email", userEmail)
        .maybeSingle();

        const { data : teamData, error: teamError } = await supabase
        .from("teams")
        .select("*") 
        .eq("id", userData.team_id)
        .maybeSingle();

        const { data : teammates, error: teammateError } = await supabase
        .from("users")
        .select("*") 
        .eq("team_id", userData.team_id); 


        if (userError) {
        console.error("Error fetching responses:", userError.message);
        return;
        }

        if (teamError) {
        console.error("Error fetching responses:", teamError.message);
        return;
        }
        
        if (!userData) {
        console.log("No previous responses found.");
        return;
        }

        setName(userData.preferred_name || "");
        setTeam(teamData.team_name || "");
        setMajor(userData.major || "");
        setTeamID(userData.team_id || "");
        setYear(userData.year || "");
        let arr: string[] = teammates ? teammates.map((team:User) => team.name) : [];
        setTeammates(arr);

    } catch (err: any) {
        console.error("Error retrieving responses:", err.message);
    }
    };


    const formatter = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    
    {/* Link to case package */}
    const downloadLink = "/assets/case-package.zip";

    return (
      <>
        <div className="dashboard-wrapper">
          <div className="top-row">
            <div className="top1__welcome_container">
              <PortalBoxWidget style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "90%",
                  overflow:"auto"
                }}>
                <div className="dashboard__welcome_widget">
                  <div>
                    <p className="dashboard__desc">Welcome, </p>
                    <h1 className="dashboard__username">
                      {name ? name : "Guest"}
                    </h1>
                  </div>
                  <div>
                    <p className="dashboard__desc"> Today is</p>
                    <p className="dashboard__desc">{formatter.format(new Date())}</p>
                  </div>
                </div>
              </PortalBoxWidget>
            </div>
            <div className="top2__team_container">
              <PortalBoxWidget
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "90%",
                }}
              >
                <h2 className="dashboard__widget_title my_team__title">My Team</h2>
                  {teamID ? (
                    <h1 className="team-name">
                      {team} #{teamID}
                    </h1>
                  ) : (
                      <p className="dashboard__desc">You don't have a team!</p>
                  )}
                {teammates && <h3>{teammates.join(", ")}</h3>}
              </PortalBoxWidget>
            </div>
            <div className="top3">
              <PortalBoxWidget style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "90%",
                  overflow:"auto"
                }}>
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    overflow: "hidden",
                  }}>
                  <h2 className="dashboard__widget_title">Task Timer</h2>
                  <p className="dashboard__desc">Case will be released in</p>
                  <Countdown targetDate={"2025-02-26T16:59:59"} />
                </div>
              </PortalBoxWidget>
            </div>
          </div>
          <div className="bot-row">
            <div className="bot1-wrapper">
              <div className="bot1-top">
                <PortalBoxWidget>
                  <div className="dashboard__case_package_widget">
                    <h2 className="dashboard__widget_title">Case Package</h2>
                    <div className="dashboard__button-container">
                      <button onClick={() => window.open("./assets/updated_case.pdf", "_blank")} className="button-primary">
                        View Case
                      </button>
                      <a href={downloadLink} download className="button-primary">
                        Download
                      </a>
                    </div>
                  </div>
                </PortalBoxWidget>
              </div>
              <div className="bot1-bot">
                <PortalBoxWidget style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "90%",
                    overflow:"auto"
                  }}>
                  <h2 className="dashboard__widget_title project_submission__title">Submission Status</h2>
                  <p className="dashboard__desc">not started</p>
                </PortalBoxWidget>
              </div>
            </div>
            <div className="bot2">
              <PortalBoxWidget style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "90%",
                    overflow:"auto"
                  }}>
                <h2 className="dashboard__widget_title announcements__title">Announcements</h2>
                <p className="dashboard__desc right"> ⭐ Registration is now over! Participants without teams will be assigned EOD Feb 25.</p>
              </PortalBoxWidget>
            </div>
            <div className="bot3">
              <PortalBoxWidget style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "90%",
                  overflow:"auto"
                }}>
              <h2 className="dashboard__widget_title">Your Upcoming Events</h2>
              <div className="upcoming_events__table-wrapper">
                <div className="row">
                  <h2 className="left dashboard__desc" style={{backgroundColor:""}}>Feb 12</h2>
                  <h2 className="right dashboard__desc">Registration Opens</h2>
                </div>
                <div className="row">
                  <h2 className="left dashboard__desc" >Feb 24</h2>
                  <h2 className="right dashboard__desc">Registration and Team Deadline</h2>
                </div>
                <div className="row">
                  <h2 className="left dashboard__desc"style={{backgroundColor:"#9D5C75"}}>Feb 26</h2>
                  <h2 className="right dashboard__desc"style={{backgroundColor:"#9D5C75"}}>Case Release</h2>
                </div>
                <div className="row">
                  <h2 className="left dashboard__desc">Mar 1</h2>
                  <h2 className="right dashboard__desc">Case Workshop + Networking Session</h2>
                </div>
                <div className="row">
                  <h2 className="left dashboard__desc">Mar 4</h2>
                  <h2 className="right dashboard__desc">Online Presentation Workshop</h2>
                </div>
                <div className="row">
                  <h2 className="left dashboard__desc">Mar 5 </h2>
                  <h2 className="right dashboard__desc">Submission Deadline + Finalist Announcement</h2>
                </div>
                <div className="row">
                  <h2 className="left dashboard__desc">Mar 8</h2>
                  <h2 className="right dashboard__desc">Finalist Presentation Day</h2>
                </div>
                </div>
              </PortalBoxWidget>
            </div>
          </div>
        </div>
      </>
    );
}