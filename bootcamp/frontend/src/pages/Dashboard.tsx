import React, { useState } from "react";
// @ts-ignore
import { supabase } from "../supabase";
import PortalBoxWidget from "../components/PortalBoxWidget";
import "./Dashboard.css";
import Countdown from "../components/Countdown";
import Modal from "../components/Modal";
import FileUpload from "../components/FileUpload";
import { ExternalLinkIcon } from "lucide-react";
import { useUserData } from "../hooks/useUserData";
import { useSubmission } from "../hooks/useSubmission";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<"initial" | "success">(
    "initial"
  );

  const {
    email,
    name,
    major,
    team,
    teamID,
    year,
    teammates,
    isLoading: userLoading,
  } = useUserData();

  const {
    hasSubmitted,
    submissionDate,
    submissionTime,
    link,
    pdfUrl,
    fileName,
    isLoading: submissionLoading,
    handleSubmissionComplete,
    fetchPdfUrl,
  } = useSubmission(teamID);

  // Date formatter
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Link to case package
  const downloadLink = "/assets/case-package.zip";

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
              <h1 className="team-name">{team ? team : "No Team"}</h1>
              <div className="dashboard__desc">
                {teammates.length > 0 ? (
                  <ul>
                    {teammates.map((teammate, index) => (
                      <li key={index}>{teammate}</li>
                    ))}
                  </ul>
                ) : (
                  <p>You don't have a team!</p>
                )}
              </div>
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
                <h2 className="dashboard__widget_title">Submission Status</h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "0 0.5rem",
                  }}
                >
                  {hasSubmitted && fileName && (
                    <p
                      style={{
                        fontFamily: "Roboto Mono",
                        fontSize: "0.8rem",
                        color: "#ffffff",
                        backgroundColor: "#cf6f1b",
                        padding: "0.5rem",
                        borderRadius: "0.5rem",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>{fileName}</span>
                      <br />
                      {link && <a href={link} target="_blank" style={{color:'white'}} rel="noopener noreferrer">{link}</a>}
                    </p>
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
                            fontSize: "0.8rem",
                            color: "#ffffff",
                          }}
                        >
                          {submissionDate}
                          <span style={{ fontWeight: "bold" }}>
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
                    maxWidth: "100%",
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
                        backgroundColor: "#E3AE86",
                        color: "#BB6413",
                      }}
                      title="View Submission"
                    >
                      <ExternalLinkIcon size={20} />
                    </button>
                  )}
                </div>
              </PortalBoxWidget>

              {/* Modal Component */}
              <Modal
                isOpen={isModalOpen}
                onClose={() => {
                  setIsModalOpen(false);
                  setUploadStatus("initial");
                  if (hasSubmitted) {
                    fetchPdfUrl();
                  }
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
                      onUploadComplete={(url, originalFileName) => {
                        console.log("File uploaded:", url);
                        setUploadStatus("success");
                        handleSubmissionComplete(originalFileName);
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
