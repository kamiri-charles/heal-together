export const DashboardContent = ({section}) => {

    if (section === 'Home') {
        return (
            <div className="dashboard-content home">
                <div className="user-meta">
                    <div className="image">
                        <i className="bx bx-user"></i>
                    </div>
                    <div className="name">John Doe</div>
                    <div className="email">johndoe123@gmail.com</div>
                    <div className="phone">+123 456 789 000</div>
                </div>
            </div>
        )
    } else if (section === 'Sessions') {
        return (
            <div className="dashboard-content sessions">
                This is the sessions section.
            </div>
        )
    } else if (section === 'My Therapist') {
        return (
            <div className="dashboard-content my-therapist">
                This is the my-therapist section.
            </div>
        )
    } else if (section === 'Friends') {
        return (
            <div className="dashboard-content friends">
                This is the friends section.
            </div>
        )
    } else if (section === 'Messages') {
        return (
            <div className="dashboard-content messages">
                This is the messages section.
            </div>
        )
    } else {
        return (
            <div className="dashboard-content home">
                This is the home section.
            </div>
        )
    }
}