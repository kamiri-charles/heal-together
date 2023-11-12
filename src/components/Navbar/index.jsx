import { useState } from 'react';
import './styles.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`navbar ${isActive ? 'active': ''}`}>

      <div className="offset">
        <div className="ham-menu" onClick={() => setIsActive(!isActive)}>
          <i className={`bx bx-${isActive ? 'x': 'menu'}`}></i>
        </div>
      </div>
      <div className="tab">
        <i className="bx bx-home"></i>
        <span>Home</span>
      </div>

      <div className="tab">
        <i className="bx bx-calendar-check"></i>
        <span>Sessions</span>
      </div>

      <div className="tab">
        <i className="bx bxs-user-detail"></i>
        <span>My Therapist</span>
      </div>

      <div className="tab">
        <i className="bx bx-chat"></i>
        <span>Friends</span>
      </div>

      <div className="tab">
        <i className="bx bx-message-square"></i>
        <span>Messages</span>
      </div>
    </div>
  )
}

export default Navbar;