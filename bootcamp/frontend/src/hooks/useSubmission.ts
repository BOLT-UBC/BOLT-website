import { useState, useEffect } from "react";
// @ts-ignore
import { supabase } from "../supabase";

export function useSubmission(teamID: string) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submissionDate, setSubmissionDate] = useState<string>("");
  const [submissionTime, setSubmissionTime] = useState<string>("");
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (teamID) {
      checkExistingSubmission();
    }
  }, [teamID]);

  const checkExistingSubmission = async () => {
    if (!teamID) return;
    
    try {
      setIsLoading(true);
      const { data: files, error } = await supabase.storage
        .from("submissions")
        .list(`team_${teamID}`);
        
      if (error) throw error;
      
      const hasExistingSubmission = files && files.length > 0;
      setHasSubmitted(hasExistingSubmission);
      
      if (hasExistingSubmission) {
        await fetchSubmissionDetails();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to check submission status");
      console.error("Error checking submission:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSubmissionDate = async () => {
    if (!teamID) return;
    
    try {
      setIsLoading(true);
      const { data: files, error } = await supabase.storage
        .from("submissions")
        .list(`team_${teamID}`);
        
      if (error) throw error;
      
      if (files && files.length > 0) {
        const latestFile = files[files.length - 1];
        const date = new Date(latestFile.created_at).toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        });
        const time = new Date(latestFile.created_at).toLocaleTimeString();
        setSubmissionDate(`${date} at `);
        setSubmissionTime(time);
        
        // Extract original filename from stored
        // Format: originalfilename_timestamp.pdf
        const fileNameParts = latestFile.name.split('_');
        if (fileNameParts.length > 1) {
          const originalName = fileNameParts.slice(0, -1).join('_');
          setFileName(originalName);
        } else {
          setFileName(latestFile.name);
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch submission date");
      console.error("Error fetching submission date:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPdfUrl = async () => {
    if (!teamID) return;
    
    try {
      setIsLoading(true);
      const { data: files, error } = await supabase.storage
        .from("submissions")
        .list(`team_${teamID}`);
        
      if (error) throw error;
      
      if (files && files.length > 0) {
        const latestFile = files[files.length - 1];
        const { data, error: urlError } = await supabase.storage
          .from("submissions")
          .createSignedUrl(`team_${teamID}/${latestFile.name}`, 3600);
          
        if (urlError) throw urlError;
        
        if (data?.signedUrl) {
          setPdfUrl(data.signedUrl);
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch PDF URL");
      console.error("Error fetching PDF URL:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSubmissionDetails = async () => {
    await fetchSubmissionDate();
    await fetchPdfUrl();
  };

  const updateSubmissionStatus = async (email: string) => {
    if (!email) return;
    
    try {
      setIsLoading(true);
      const { error } = await supabase
        .from("users")
        .update({ submission_status: true })
        .eq("email", email);
        
      if (error) throw error;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update submission status");
      console.error("Error updating submission status:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmissionComplete = async (originalFileName?: string) => {
    setHasSubmitted(true);
    if (originalFileName) {
      setFileName(originalFileName);
    }
    await fetchSubmissionDetails();
    
    const storedEmail = localStorage.getItem("user_email");
    if (storedEmail) {
      await updateSubmissionStatus(storedEmail);
    }
  };

  return {
    hasSubmitted,
    submissionDate,
    submissionTime,
    pdfUrl,
    fileName,
    isLoading,
    error,
    fetchSubmissionDate,
    fetchPdfUrl,
    handleSubmissionComplete,
    checkExistingSubmission
  };
}