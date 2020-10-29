import React from 'react';
import SideBar from './../SideBar'
import "./styles.css"


class UserProfile extends React.Component{
    render() {
        const {user} = this.props // User Object to be used to grab all the data
        return (
            <div className="user-profile">
                <SideBar isLoggedIn={true}>
                
                </SideBar>
                {/* Header */}
                <div className="user-profile__header blocks">
                    <div className="user-profile__icon">
                        {/* Currently the css file HARDCODES a placeholder profile image */}
                        {/* Requires a server call to get the user's profile icon */}
                    </div>
                    <div className="user-profile__basic-info">
                        <h1 className="user-profile__username text">
                            {/* Currently HARDCORDED */}
                            {/* Requires a server call */}
                            FirstName LastName
                        </h1>
                        <h3 className="user-profile__age text">
                            {/* Currently HARDCODED */}
                            Age: 20
                        </h3>
                        <h3 className="user-profile__preferred-genre text">
                            {/* Currently HARDCODED */}
                            Preferred Genre: Sci-Fi
                        </h3>
                    </div>
                </div>    
                {/* General Information*/}
                <div className="user-profile__info-container blocks">
                        <div className="user-profile__info-table">
                            <div className="user-profile__info-item">
                                {/* Currently HARDCORDED */}
                                <div className="item-title text">Joined:</div>
                                <div className="item-value text">December 21</div>
                            </div>
                            <div className="user-profile__info-item">
                                {/* Currently HARDCORDED */}
                                <div className="item-title text">Followers:</div>
                                <div className="item-value text">6666</div>
                            </div>
                            <div className="user-profile__info-item">
                                {/* Currently HARDCORDED */}
                                <div className="item-title text">Followed:</div>
                                <div className="item-value text">420</div>
                            </div>
                            <div className="user-profile__info-item">
                                {/* Currently HARDCORDED */}
                                <div className="item-title text">Approval Rate:</div>
                                <div className="item-value text">69%</div>
                            </div>
                        </div>
                </div>
                <div className="career-featured-works blocks">
                        <h1 className="career-featured-works-header text">
                            Featured Works:
                        </h1>
                        {/* Currently HARDCODED */}
                        <div className="career-featured-works-item text">
                            This user hasn't published any works yet...
                        </div>
                </div>
                {/* Novelist Career */}
                {/* Currently HARDCODED */}
                <div className="user-profile__career-stats">
                    <h2 className="career-stats-header text">
                        Career Statistics:
                    </h2>
                    <div className="career-stats-item text">
                        Number of Proposals Accepted: 9
                    </div>
                    <div className="career-stats-item text">
                        Number of works begun: 11
                    </div>
                    <div className="career-stats-item text">
                        Last Contributed On: Oct 31, 2020
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile