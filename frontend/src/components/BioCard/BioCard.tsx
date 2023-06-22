import { FC } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./BioCard.css";
import { useNavigate } from "react-router-dom";

interface BioCardProps {
  id: string;
  name: string;
  role: string;
}

const BioCard: FC<BioCardProps> = (props) => {
  const { id, name, role } = props;
  const navigateToUserProfile = useNavigate();

  const handleNavigation = () => {
    navigateToUserProfile(`/teams/${id}/${name}`);
  };

  return (
    <div className="bio-card" onClick={handleNavigation} id={id}>
      <FaUserCircle size={50} color=" #D3D3D3" />
      <p>{name}</p>
      <p>{role}</p>
    </div>
  );
};

export default BioCard;
