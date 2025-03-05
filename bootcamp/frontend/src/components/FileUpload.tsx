import React, { useState, useEffect, FC } from "react";
// @ts-ignore
import { supabase } from "../supabase";
import "./FileUpload.css";

interface FileUploadProps {
  onUploadComplete: (url: string, originalFileName: string) => void;
  onError: (error: string) => void;
}

const FileUpload: FC<FileUploadProps> = ({
  onUploadComplete,
  onError,
}) => {
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [teamInfo, setTeamInfo] = useState<{ id: string; name: string } | null>(
    null
  );
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    fetchTeamInfo();
  }, []);

  /* Helper to fetch team info */
  const fetchTeamInfo = async () => {
    const storedEmail = localStorage.getItem("user_email");
    if (!storedEmail) {
      onError("User not logged in");
      return;
    }

    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("team_id")
      .eq("email", storedEmail)
      .single();

    if (userError || !userData?.team_id) {
      onError("No team found");
      return;
    }

    // Get team details
    const { data: teamData, error: teamError } = await supabase
      .from("teams")
      .select("id, team_name")
      .eq("id", userData.team_id)
      .single();

    if (teamError || !teamData) {
      onError("Could not fetch team information");
      return;
    }

    setTeamInfo(teamData);
    setLink(teamData.submission_link || "");
  };

  /* Helper for replacing files */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type !== "application/pdf") {
        onError("Please upload a PDF file");
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file || !teamInfo) {
      onError("Please select a file and ensure you are in a team");
      return;
    }

    try {
      setUploading(true);

      // Check if team already has a submission
      const { data: existingSubmissions } = await supabase.storage
        .from("submissions")
        .list(`team_${teamInfo.id}`);

      // Create distinct filename with team info and timestamp
      const timestamp = Date.now();
      const originalFileName = file.name;
      const fileName = `team_${teamInfo.id}/${originalFileName}_${timestamp}.pdf`;

      const { error: uploadError } = await supabase.storage
        .from("submissions")
        .upload(fileName, file, {
          upsert: true,
        });

      if (uploadError) throw uploadError;

      if (existingSubmissions && existingSubmissions.length > 0) {
        await supabase.storage
          .from("submissions")
          .remove(
            existingSubmissions.map(
              (file: { name: string }) => `team_${teamInfo.id}/${file.name}`
            )
          );
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("submissions").getPublicUrl(fileName);

      onUploadComplete(publicUrl, originalFileName);
    } catch (error: any) {
      onError(error.message);
    } finally {
      setUploading(false);
    }

    const { error: linkUpdateError } = await supabase
        .from("teams")
        .update({ submission_link: link })  // Update the submission link
        .eq("id", teamInfo.id);

      if (linkUpdateError) {
        onError("Failed to update the submission link");
        return;
      }
  };

  return (
    <div className="fileUpload">
      {teamInfo ? (
        <>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            disabled={uploading}
            className="fileInput"
          />
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter sharable link"
            disabled={uploading}
            className="fileInput"
            />
          {file && <div className="fileName">Selected: {file.name}</div>}

          <button
            className="button-primary"
            onClick={handleUpload}
            disabled={!file || uploading}
          >
            {uploading ? "Uploading..." : "Upload PDF"}
          </button>
        </>
      ) : (
        <p>Please join a team before submitting.</p>
      )}
    </div>
  );
};

export default FileUpload;
