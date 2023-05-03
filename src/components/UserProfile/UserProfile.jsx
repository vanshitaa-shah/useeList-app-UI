import React from 'react'
import Style from './UserProfile.module.css'
const UserProfile = ({ profileInfo }) => {
    return (
        <div className={Style.userProfile}>
            <img src={profileInfo.profileImg} alt="img" width={50} />
            <div className={Style.userInfo}>
                <span>{profileInfo.name}</span>
                <span>{profileInfo.email}</span>
            </div>
        </div>
    )
}

export default UserProfile;