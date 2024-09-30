import { FC, useEffect, useState } from 'react';
import Profile from './Profile.tsx';
import "../styles.css"

interface Executive {
    profilepic: string;
    name: string;
    title: string;
}

interface Team {
    team_name: string;
    executives: Executive[];
}

interface Teams {
    teams: Team[];
}

interface TeamDisplayProps {
    teamName: string;
}

const TeamDisplay: FC<TeamDisplayProps> = (props) => {
    const [teams, setTeams] = useState<Teams | null>(null);

    useEffect(() => {
        fetch('/assets/teams/teamInfo.json')
            .then(response => response.json())
            .then(data => setTeams(data))
            .catch(error => console.error('Error fetching team data:', error));
    }, []);

    if (!teams) {
        return <div className="windows">Loading...</div>;
    }

    const specificTeam: Team | undefined = teams.teams.find(team => team.team_name === props.teamName);

    if (specificTeam) {
        const teamName: string = specificTeam.team_name;
        const executives: Executive[] = specificTeam.executives;

        return (
            <div className={'windows ' + teamName}>
                {executives.map((executive: Executive, index: number) => (
                    <Profile key={index} profilepic={executive.profilepic} name={executive.name} title={executive.title} />
                ))}
            </div>
        );
    } else {
        return (
            <div className="windows">
                <p>Team not found</p>
            </div>
        );
    }
}

export default TeamDisplay;