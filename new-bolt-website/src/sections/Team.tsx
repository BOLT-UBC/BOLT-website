import React, { useEffect, useState } from "react";
import styles from "./Team.module.css";
import teamBG from "../assets/images/teamBG.webp";
import { Member, TeamData } from "../types";
import { getProfileUrl } from "../utils";

// Import with type assertion for JSON data
import teamDataJson from "../assets/team.json";
const teamData = teamDataJson as TeamData;

const Team: React.FC = () => {
  const [allMembers, setAllMembers] = useState<Member[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

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

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  return (
    <div className={styles.Team} id="Team">
      <img
        src={teamBG}
        alt="Team Background"
        className={styles.teamBG}
        draggable="false"
        loading="eager"
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
                  <div
                    className={`${styles.imagePlaceholder} ${
                      loadedImages.has(index) ? styles.loaded : ""
                    }`}
                  >
                    <img
                      src={getProfileUrl(member.profilepic)}
                      alt={member.name}
                      loading="lazy"
                      onLoad={() => handleImageLoad(index)}
                      className={styles.profileImage}
                    />
                  </div>
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
