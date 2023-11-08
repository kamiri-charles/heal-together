import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import './styles.scss';
import { MetroSpinner } from 'react-spinners-kit';

const SignIn = () => {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const nav = useNavigate();

    useEffect(() => {
      // Function to fetch a random quote from the Quotable API
      const fetchRandomQuote = async () => {
        try {
          const response = await Axios.get("https://api.quotable.io/random");
          const randomQuote = response.data.content;
          const randomAuthor = response.data.author;

          setQuote(randomQuote);
          setAuthor(randomAuthor);
        } catch (error) {
          console.error("Error fetching quote:", error);
        }
      };

      // Fetch a quote when the component mounts
      fetchRandomQuote();
    }, []);

    return (
      <div className="sign-in">
        <div className="custom-header">

            <div className="brand" onClick={() => nav('/')}>
                <div>Heal</div> <div>Together</div>
            </div>

            <button className='create-account'>Create Account</button>

        </div>

        <div className="wrapper">
            <div className="quote">
                {quote.length > 0 && author.length > 0 ? (
                    <div>
                        <div className="quote-text">{quote}</div>
                        <div className="quote-author">{author}</div>
                    </div>
                ) : (
                    <MetroSpinner />
                )}
            </div>
            <form action="">
                <input type="text" placeholder='Email address' />
                <input type="password" placeholder='Password' />

                <button className='login'>Login</button>
                <a href="/">Forgot password?</a>
            </form>
        </div>
      </div>
    );
}

export default SignIn;
