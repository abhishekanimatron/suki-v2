import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { doesEmailExist } from "../../services/firebase";
import styled from "styled-components";
import FirebaseContext from "../../context/firebase";
import * as ROUTES from "../../constants/routes";

export default function Signup() {
  useEffect(() => {
    document.title = "Create Account - Suki Market";
  }, []);
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const isInvalid = password === "" || emailAddress === "";

  const [error, setError] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    const emailExists = await doesEmailExist(emailAddress);
    //if that username doesn't exist create one with it
    if (!emailExists.length) {
      try {
        // sending email address and password firebase authentication
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);
        // update the user's display name to firstName given
        await createdUserResult.user.updateProfile({
          displayName: emailAddress,
        });
        // create a user document in users collection with uid & other details in firestore
        await firebase.firestore().collection("users").add({
          userId: createdUserResult.user.uid,
          firstName,
          lastName,
          emailAddress: emailAddress.toLowerCase(),
          dateCreated: Date.now(),
        });
        history.push(ROUTES.HOME);
      } catch (error) {
        setFirstName("");
        setLastName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      }
    }
    //else throw error message
    else {
      setEmailAddress("");
      setError("Email already taken, try another");
    }
  };

  return (
    <div>
      <Container>
        <h3>Create Account</h3>
        <HeroContent>
          <p>
            Already have an account?{" "}
            <Link
              to={ROUTES.LOGIN}
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Sign in here.</span>
            </Link>
          </p>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSignUp} method="POST">
            <label htmlFor="firstName">First Name</label>
            <input
              aria-label="Enter first name"
              name="firstName"
              type="text"
              placeholder="Enter your first name "
              onChange={({ target }) => {
                setFirstName(target.value);
              }}
              value={firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              aria-label="Enter last name "
              name="lastName"
              type="text"
              placeholder="Enter your last name "
              onChange={({ target }) => {
                setLastName(target.value);
              }}
              value={lastName}
            />
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
            <button disabled={isInvalid} type="submit">
              Create
            </button>
          </form>
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
  flex-direction: column;
  margin: auto;
  margin-bottom: 5rem;
  align-items: center;
  p {
    margin-top: 1rem;
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
    float: left;
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
