import { FC } from "react";
import "./UserProfile.css";

interface UserProfileProps {
  user: {
    name: string;
    role: string;
    image: string;
    teams: string[];
    projects: string[];
  };
}

const UserProfile: FC = () => {
  //   const { name, role, image, teams, projects } = user;
  return <div className="container">
    <div className="user-profile">
        
    </div>
  </div>;
};

export default UserProfile;
