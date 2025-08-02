import React, { useEffect, useState } from "react";
import styles from "./Team.module.css";
import teamData from "../assets/team.json";
import teamBG from "../assets/images/teamBG.webp";

const Team: React.FC = () => {
  const [allMembers, setAllMembers] = useState<
    { name: string; profilepic: string; title: string }[]
  >([]);

  useEffect(() => {
    const members = teamData.teams.flatMap((team) =>
      team.executives.map((exec) => ({
        name: exec.name,
        title: exec.title,
        profilepic: exec.profilepic,
      }))
    );
    setAllMembers(members);
  }, []);

  return (
    <div className={styles.Team} id="Team">
      <img
        src={teamBG}
        alt="Right Mountain"
        className={styles.teamBG}
        draggable="false"
      />

      <div className={styles.teamContainer}>
        <div className={styles.boltTeam}>
          <div className={styles.boltTeam}>
            <p className={styles.boltTeamText}>
              Made With 💜 from the BOLT UBC Team
            </p>
          </div>

          <div className={styles.scrollContainer}>
            <div className={styles.scrollTrack}>
              {[...allMembers, ...allMembers].map((member, index) => (
                <div key={index} className={styles.memberImage}>
                  <img
                    src={`${import.meta.env.BASE_URL}profiles/${
                      member.profilepic
                    }`}
                    alt={member.name}
                  />
                  <div className={styles.memberInfo}>
                    <div className={styles.memberName}>{member.name}</div>
                    <div className={styles.memberTitle}>{member.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
