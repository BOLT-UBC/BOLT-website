import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import PortalBoxWidget from "../components/PortalBoxWidget";
import "./Dashboard.css";
import Countdown from "../components/Countdown";
import Modal from "../components/Modal";
import FileUpload from "../components/FileUpload";
import { ExternalLinkIcon } from "lucide-react";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"initial" | "success">(
    "initial"
  );
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submissionDate, setSubmissionDate] = useState<string>("");
  const [submissionTime, setSubmissionTime] = useState<string>("");
  const [pdfUrl, setPdfUrl] = useState<string>("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("user_email");
    if (storedEmail) {
      setEmail(storedEmail);
      fetchUserData(storedEmail);
    } else {
      fetchUserEmail();
    }
  }, []);

  useEffect(() => {
    checkExistingSubmission();
  }, []);

  useEffect(() => {
    if (hasSubmitted) {
      fetchSubmissionDate();
      fetchPdfUrl();
    }
  }, [hasSubmitted]);

  /* Helper to fetch date of last submission */
  const fetchSubmissionDate = async () => {
    const storedEmail = localStorage.getItem("user_email");
    if (!storedEmail) return;

    const { data: userData } = await supabase
      .from("users")
      .select("team_id")
      .eq("email", storedEmail)
      .single();

    if (!userData?.team_id) return;

    const { data: files } = await supabase.storage
      .from("submissions")
      .list(`team_${userData.team_id}`);

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
    }
  };

  /* Helper to fetch user email */
  const fetchUserEmail = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (!error && data?.user) {
      setEmail(data.user.email ?? "");
      localStorage.setItem("user_email", data.user.email ?? "");
      fetchUserData(data.user.email ?? "");
    }
  };

  /* Helper to fetch and set current logged in user's data */
  const fetchUserData = async (userEmail: string) => {
    try {
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("*")
        .eq("email", userEmail)
        .maybeSingle();

      const { data: teamData, error: teamError } = await supabase
        .from("teams")
        .select("*")
        .eq("id", userData.team_id)
        .maybeSingle();

      const { data: teammates, error: teammateError } = await supabase
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
      let arr: string[] = teammates
        ? teammates.map((team: User) => team.name)
        : [];
      setTeammates(arr);
    } catch (err: any) {
      console.error("Error retrieving responses:", err.message);
    }
  };

  /* Helper to check if team has already submitted */
  const checkExistingSubmission = async () => {
    const storedEmail = localStorage.getItem("user_email");
    if (!storedEmail) return;

    const { data: userData } = await supabase
      .from("users")
      .select("team_id")
      .eq("email", storedEmail)
      .single();

    if (!userData?.team_id) return;

    const { data: existingSubmissions } = await supabase.storage
      .from("submissions")
      .list(`team_${userData.team_id}`);

    setHasSubmitted(existingSubmissions && existingSubmissions.length > 0);
  };

  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  {
    /* Link to case package */
  }
  const downloadLink = "/assets/case-package.zip";

  /* Helper to fetch PDF URL */
  const fetchPdfUrl = async () => {
    const storedEmail = localStorage.getItem("user_email");
    if (!storedEmail) return;

    // Get user's team_id
    const { data: userData } = await supabase
      .from("users")
      .select("team_id")
      .eq("email", storedEmail)
      .single();

    if (!userData?.team_id) return;

    const { data: files } = await supabase.storage
      .from("submissions")
      .list(`team_${userData.team_id}`);

    if (files && files.length > 0) {
      const latestFile = files[files.length - 1];
      // Signed URL that expires in 1 hour
      const { data } = await supabase.storage
        .from("submissions")
        .createSignedUrl(`team_${userData.team_id}/${latestFile.name}`, 3600);

      if (data?.signedUrl) {
        setPdfUrl(data.signedUrl);
      }
    }
  };

  return (
    <>
      <div className="dashboard-wrapper">
        <div className="top-row">
          <div className="top1__welcome_container">
            <PortalBoxWidget
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "90%",
                overflow: "auto",
              }}
            >
              <div className="dashboard__welcome_widget">
                <div>
                  <p className="dashboard__desc">Welcome, </p>
                  <h1 className="dashboard__username">
                    {name ? name : "Guest"}
                  </h1>
                </div>
                <div>
                  <p className="dashboard__desc"> Today is</p>
                  <p className="dashboard__desc">
                    {formatter.format(new Date())}
                  </p>
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
              <h2 className="dashboard__widget_title my_team__title">
                My Team
              </h2>
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
            <PortalBoxWidget
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "90%",
                overflow: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
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
                    <button
                      onClick={() =>
                        window.open("./assets/case-package.pdf", "_blank")
                      }
                      className="button-primary"
                    >
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
              <PortalBoxWidget
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "90%",
                  overflow: "auto",
                  position: "relative",
                }}
              >
                <h2 className="dashboard__widget_title project_submission__title">
                  Submission Status
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    paddingLeft: "1rem",
                  }}
                >
                  {hasSubmitted && (
                    <div>Preview Component</div>
                  )}
                  <div>
                    <div
                      style={{
                        fontFamily: "Righteous",
                        fontSize: "1.6rem",
                        color: "#90EE90",
                      }}
                    >
                      {hasSubmitted ? "Submitted" : "No submission"}
                    </div>
                    <div>
                      {hasSubmitted && (
                        <div
                          style={{
                            fontFamily: "Roboto Mono",
                            fontSize: "0.8em",
                            color: "#ffffff",
                          }}
                        >
                          {submissionDate}
                          <span
                            style={{ fontSize: "1.2rem", fontWeight: "medium" }}
                          >
                            {submissionTime}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    position: "absolute",
                    bottom: "1rem",
                  }}
                >
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="button-primary"
                  >
                    {hasSubmitted ? "Resubmit Project" : "Submit Project"}
                  </button>
                  {hasSubmitted && pdfUrl && (
                    <button
                      onClick={() => window.open(pdfUrl, "_blank")}
                      className="button-primary"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0.6vw 0.8vw",
                        backgroundColor: "#91511a",
                      }}
                      title="View Submission"
                    >
                      <ExternalLinkIcon size={18} />
                    </button>
                  )}
                </div>
              </PortalBoxWidget>

              {/* Add Modal Component */}
              <Modal
                isOpen={isModalOpen}
                onClose={() => {
                  setIsModalOpen(false);
                  setUploadStatus("initial");
                }}
                title={
                  uploadStatus === "initial"
                    ? "Project Submission"
                    : "Submission Successful!"
                }
              >
                {uploadStatus === "initial" ? (
                  <div style={{ padding: "20px" }}>
                    <p style={{ color: "#fdf9f7", fontFamily: "Roboto Mono" }}>
                      Please upload your project submission in PDF format.
                    </p>
                    <FileUpload
                      onUploadComplete={(url) => {
                        console.log("File uploaded:", url);
                        setUploadStatus("success");
                        setHasSubmitted(true);
                        fetchSubmissionDate();
                        fetchPdfUrl();

                        const storedEmail = localStorage.getItem("user_email");
                        if (storedEmail) {
                          supabase
                            .from("users")
                            .update({ submission_status: true })
                            .eq("email", storedEmail);
                        }
                      }}
                      onError={(error) => {
                        console.error("Upload error:", error);
                        alert(error);
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      padding: "20px",
                      textAlign: "center",
                      color: "#fdf9f7",
                    }}
                  >
                    <p
                      style={{ fontFamily: "Roboto Mono", fontWeight: "bold" }}
                    >
                      Your team's submission has been received!
                    </p>
                    <p
                      style={{
                        fontSize: "0.8em",
                        marginTop: "1rem",
                        fontFamily: "Roboto Mono",
                      }}
                    >
                      You can resubmit your project at any time before the
                      deadline.
                    </p>
                    <button
                      className="button-primary"
                      onClick={() => {
                        setIsModalOpen(false);
                        setUploadStatus("initial");
                      }}
                      style={{ marginTop: "1rem" }}
                    >
                      Close
                    </button>
                  </div>
                )}
              </Modal>
            </div>
          </div>
          <div className="bot2">
            <PortalBoxWidget
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "90%",
                overflow: "auto",
              }}
            >
              <h2 className="dashboard__widget_title announcements__title">
                Announcements
              </h2>
              <p className="dashboard__desc right">
                {" "}
                ⭐ Registration is now over! Participants without teams will be
                assigned EOD Feb 25.
              </p>
            </PortalBoxWidget>
          </div>
          <div className="bot3">
            <PortalBoxWidget
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "90%",
                overflow: "auto",
              }}
            >
              <h2 className="dashboard__widget_title">Your Upcoming Events</h2>
              <div className="upcoming_events__table-wrapper">
                <div className="row">
                  <h2
                    className="left dashboard__desc"
                    style={{ backgroundColor: "" }}
                  >
                    Feb 12
                  </h2>
                  <h2 className="right dashboard__desc">Registration Opens</h2>
                </div>
                <div className="row">
                  <h2 className="left dashboard__desc">Feb 24</h2>
                  <h2 className="right dashboard__desc">
                    Registration and Team Deadline
                  </h2>
                </div>
                <div className="row">
                  <h2
                    className="left dashboard__desc"
                    style={{ backgroundColor: "#9D5C75" }}
                  >
                    Feb 26
                  </h2>
                  <h2
                    className="right dashboard__desc"
                    style={{ backgroundColor: "#9D5C75" }}
                  >
                    Case Release
                  </h2>
                </div>
                <div className="row">
                  <h2 className="left dashboard__desc">Mar 1</h2>
                  <h2 className="right dashboard__desc">
                    Case Workshop + Networking Session
                  </h2>
                </div>
                <div className="row">
                  <h2 className="left dashboard__desc">Mar 4</h2>
                  <h2 className="right dashboard__desc">
                    Online Presentation Workshop
                  </h2>
                </div>
                <div className="row">
                  <h2 className="left dashboard__desc">Mar 5 </h2>
                  <h2 className="right dashboard__desc">
                    Submission Deadline + Finalist Announcement
                  </h2>
                </div>
                <div className="row">
                  <h2 className="left dashboard__desc">Mar 8</h2>
                  <h2 className="right dashboard__desc">
                    Finalist Presentation Day
                  </h2>
                </div>
              </div>
            </PortalBoxWidget>
          </div>
        </div>
      </div>
    </>
  );
}
