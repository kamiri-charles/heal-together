import { useNavigate } from "react-router-dom";
import "./styles.scss";

const TherapistForm = () => {
  const nav = useNavigate();


  return (
    <div className="therapist-form">
      <div className="custom-header">
        <div className="brand" onClick={() => nav("/")}>
          <div>Heal</div> <div>Together</div>
        </div>

        <button className="create-account" onClick={() => nav("/sign-up")}>
          Create Account
        </button>
      </div>

      <div className="wrapper">
        <form action="">
          <div className="title">Create an account</div>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email address" />
          <input type="password" placeholder="Password" />

          <button className="login" onClick={() => nav('/dashboard')}>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default TherapistForm;
