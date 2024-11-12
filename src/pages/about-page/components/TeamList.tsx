import { useState, FC } from 'react';

export interface Team {
    icon: string;
    label: string;
}

export const allTeams: Team[] = [
    { icon: "", label: "First/Second Year Rep" },
    { icon: "", label: "Team 1" },
    { icon: "", label: "Team 2" },
    { icon: "", label: "Development" },
    { icon: "", label: "Marketing" },
    { icon: "", label: "Finance" },
];

const TeamList: FC = () => {
    const [currentTeam, setCurrentTeam] = useState<Team>(allTeams[0]);

    const getNextTeam = (): Team => {
        const currentIndex: number = allTeams.indexOf(currentTeam);
        if (currentIndex === -1 || currentIndex === allTeams.length - 1) {
            return allTeams[0];
        } else {
            return allTeams[currentIndex + 1];
        }
    };

    const handleNextTeam = (): void => {
        const nextTeam: Team = getNextTeam();
        setCurrentTeam(nextTeam);
    };

    return (
        <div>
            <h2>Current Team: {currentTeam.label}</h2>
            <button onClick={handleNextTeam}>Next Team</button>
        </div>
    );
}

export default TeamList;