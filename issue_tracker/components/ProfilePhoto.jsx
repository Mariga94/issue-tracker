import Image from "next/image";
import React from "react";

const ProfilePhoto = ({imageUrl = '/user.png', width=32, height=32}) => {
  return <Image src={imageUrl} width={width} height={height} alt="profile_photo" />;
};

export default ProfilePhoto;
