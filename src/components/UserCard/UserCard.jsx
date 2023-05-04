import React from 'react'
import CardStyle from './UserCard.module.css'

const UserCard = () => {
    return (
        <div className={CardStyle.cardContainer}>
            <div className={CardStyle.cardContent}>
                <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="" width={100} />
                <span className={CardStyle.name}>John Doe <sup>.</sup></span>
                <span className={CardStyle.secondaryColor}>john.doe@example.com</span>
                <span>Your Plan: Standard</span>
                <button>Active User</button>

                <div className={CardStyle.middleSection}>
                    <span>Plan Uses</span>
                    <progress className={CardStyle.progressBar} value={49} max={100}></progress>
                </div>

                <div className={CardStyle.bottomSection}>
                    <div>
                        <span>2,450</span>
                        <p className={CardStyle.secondaryColor}>clicks reviewed</p>
                    </div>
                    <div>
                        <span>5,000</span>
                        <p className={CardStyle.secondaryColor}>Monthly clicks</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard