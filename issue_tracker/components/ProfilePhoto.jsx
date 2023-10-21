import Image from "next/image";
import React from "react";

const ProfilePhoto = ({imageUrl = '/user.png'}) => {
  return <Image src={imageUrl} width={32} height={32} alt="profile_photo" />;
};

export default ProfilePhoto;
