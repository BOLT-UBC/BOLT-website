import "../styles.css"
import "./styles.css"
import TeamDisplay from "./TeamDisplay.tsx";
import { useState, FC } from "react";
import {allTeams, Team} from "./TeamList.tsx";
import { motion, AnimatePresence } from "framer-motion";

const TeamsPage: FC = () => {
    const [selectedTab, setSelectedTab] = useState<Team>(allTeams[0]);

    return (
        <div className="header-body window">
            <nav className="card-nav">
                <ul className="card-ul">
                    {allTeams.map((item: Team) => (
                        <li
                            key={item.label}
                            className={`card-li ${item === selectedTab ? "selected" : ""}`}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}
                            {item === selectedTab ? (
                                <motion.div className="underline" layoutId="underline" />
                            ) : null}
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="main-card">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="team-window"
                    >
                        <TeamDisplay teamName={selectedTab.label} />
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}

export default TeamsPage;