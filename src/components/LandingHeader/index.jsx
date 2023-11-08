import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import "./styles.scss";

const LandingHeader = () => {
    const [isMobile, setIsMobile] = useState(false);
    const nav = useNavigate();

  return (
    <div className="landing-header">
      <div className="left">
        <Link to="header-offset" spy={true} smooth={true} duration={500}>
          <div>Heal</div> <div>Together</div>
        </Link>
      </div>

      <div className="right">
        <div className="links">
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
          <Link to="faq" spy={true} smooth={true} duration={500}>
            FAQ
          </Link>
          <Link to="jobs" spy={true} smooth={true} duration={500}>
            Therapist Jobs
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </div>

        <div className={`links-mobile ${isMobile ? "active" : ""}`}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setIsMobile(false)}
          >
            About
          </Link>
          <Link
            to="faq"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setIsMobile(false)}
          >
            FAQ
          </Link>
          <Link
            to="jobs"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setIsMobile(false)}
          >
            Jobs
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setIsMobile(false)}
          >
            Contact
          </Link>

          <div className="buttons-mobile">
            <button onClick={() => nav('/sign-in')}>Sign In</button>
            <button>Sign Up</button>
          </div>
        </div>

        <div className="buttons">
          <button onClick={() => nav('/sign-in')}>Sign In</button>
          <button className="sign-up">Get Started</button>
        </div>

        <div className="ham-menu" onClick={() => setIsMobile(!isMobile)}>
          <i className={`bx bx-${isMobile ? "x" : "menu"}`}></i>
        </div>
      </div>
    </div>
  );
};


export default LandingHeader;