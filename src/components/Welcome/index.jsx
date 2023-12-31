import { useNavigate } from 'react-router-dom';
import LandingHeader from '../LandingHeader';
import './styles.scss';

const Welcome = () => {

  const nav = useNavigate();
    return (
      <div className="welcome">
        <LandingHeader />

        <div id="header-offset"></div>
        <div id="home" className="section">
          <div className="welcome__text">
            <div className="motto">You deserve to be happy!</div>
            <div className="question">
              What type of therapy are you looking for?
            </div>

            <div className="cards">
              <div className="card individual" onClick={() => nav("/sign-up")}>
                <div className="card-title">Individual</div>
                <div className="icon">
                  <span>For myself.</span>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>

              <div className="card couple" onClick={() => nav("/sign-up")}>
                <div className="card-title">Couples</div>
                <div className="icon">
                  <span>For me and my partner.</span>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>

              <div className="card teen" onClick={() => nav("/sign-up")}>
                <div className="card-title">Teen</div>
                <div className="icon">
                  <span>For my kid.</span>
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="section">
          <div className="title">About</div>

          <div className="about__text">
            <div className="text-title">Find yourself in therapy.</div>
            <p className="text-content">
              <img src={require('../../images/doctor.jpeg')} alt="Doctor smiling" />
              HealTogether™ was founded in 2023 to remove the traditional
              barriers to therapy and make mental health care more accessible to
              everyone. Today, it is the world's largest therapy service —
              providing professional, affordable, and personalized therapy in a
              convenient online format. HealTogether's network of over 30,000
              licensed therapists has helped millions of people take ownership
              of their mental health and work towards their personal goals. As
              the unmet need for mental health services continues to grow,
              HealTogether is committed to expanding access to therapy globally.
            </p>
          </div>
        </div>

        <div id="faq" className="section">
          <div className="title">Frequently Asked Questions</div>
        </div>

        <div id="jobs" className="section">
          <div className="title">Therapist Jobs</div>

          <div className="content">
            Are you a licensed therapist? Join HealTogether's network of
            therapists and start seeing clients today.
            <button className="btn" onClick={() => nav('/therapist/create-account')}>Apply Now</button>
          </div>
        </div>

        <div id="contact" className="section">
          <div className="title">Get in Touch</div>
        </div>
      </div>
    );
};

export default Welcome;