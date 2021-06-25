import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FirebaseContext from "../../context/firebase";
import * as ROUTES from "../../constants/routes";

export default function Login() {
  useEffect(() => {
    document.title = "Login - Suki Market";
  }, []);
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = password === "" || emailAddress === "";

  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      history.push(ROUTES.HOME);
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(error.message);
    }
  };

  return (
    <div>
      <Container>
        <h3>Login</h3>
        <HeroContent>
          <p>
            Don't have an account?{" "}
            <Link
              to={ROUTES.REGISTER}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Sign up here.</span>
            </Link>
          </p>
          {error && <p style={{ color: "#eaa789" }}>{error}</p>}
          <form onSubmit={handleLogin} method="POST">
            <label htmlFor="email">Email</label>
            <input
              aria-label="Enter email address"
              name="email"
              type="text"
              placeholder="Enter your email "
              onChange={({ target }) => {
                setEmailAddress(target.value);
              }}
              value={emailAddress}
            />
            <label htmlFor="password">Password</label>
            <input
              aria-label="Enter Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              // if invalid the display of button is dimmed
            >
              Log In
            </button>
          </form>
          <Link
            to={ROUTES.HOME}
            style={{ color: "black", textDecoration: "none" }}
          >
            <p id="return-btn">Return to store</p>
          </Link>
        </HeroContent>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 130%;
  text-align: center;
  justify-content: center;
  align-items: center;
  h3 {
    margin-top: 3rem;
    display: block;
    font-weight: normal;
  }
`;
const HeroContent = styled.div`
  display: flex;
  width: 35%;
  @media (max-width: 768px) {
    width: 90%;
  }
  flex-direction: column;
  margin: auto;
  margin-bottom: 5rem;
  align-items: center;
  p {
    margin-top: 1rem;
  }
  #return-btn {
    letter-spacing: 1px;
    transition: cubic-bezier(0.23, 1, 0.32, 1) 0.3s;

    &:hover {
      color: #f4e0ea;
      cursor: pointer;
    }
  }
  span {
    &:hover {
      color: #f4e0ea;
      cursor: pointer;
    }
  }
  label {
    float: left;
    margin-left: 1rem;
    transition: cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
  }
  input {
    border: none;
    width: 100%;
    padding: 0.7rem;
    border-radius: 5px;
    margin-bottom: 1.2rem;
    box-shadow: 10px 10px 30px #bdbdbd, -20px -20px 30px #ffffff;
  }

  button {
    color: white;
    font-weight: bold;
    border: none;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    border-radius: 5px;
    background: #d9b4ea;
    box-shadow: 10px 10px 30px #bdbdbd, -20px -20px 60px #ffffff;
    transition: cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
    &:hover {
      background-color: pink;
    }
  }
`;
