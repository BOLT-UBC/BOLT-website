import "./styles.css"
import "../styles.css"
import { motion } from "framer-motion";
import {useEffect, useState} from "react";

interface ProfileProps {
    name: string;
    profilepic: string;
    title: string;
}

const Profile: React.FC<ProfileProps> = (props) => {
    const [profileImage, setProfileImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const image = await import(`../../../assets/profile-photos/${props.profilepic}`);
                setProfileImage(image.default);
            } catch (error) {
                console.error('Error loading image:', error);
            }
        };

        fetchImage();
    }, [props.profilepic]);

    return (
        <motion.div
            className="profile-holder"
            whileHover={{ scale: 1.09 }}
        >
            <div className="profile-card">
                <div className="profile-icon">
                    <div className="circle-background">
                        {profileImage && <img className="circle-image" src={profileImage} alt={props.name} />}
                    </div>
                </div>
                <div className="text">
                    <div className="profile-name">{props.name}</div>
                    <div className="profile-title">{props.title}</div>
                </div>
            </div>
        </motion.div>
    );
}

export default Profile;