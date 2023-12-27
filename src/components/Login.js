import { useState } from "react";
import { loginFields } from "../constants/formFields.js";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from "axios";
import { Link } from "react-router-dom";

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  };

  //Handle Login API Integration here
  const authenticateUser = async () => {
    try {
      const apiUrl = "http://localhost:8080/irembo/api/v1/auth/authenticate";

      const response = await axios.post(apiUrl, {
        email: loginState.email,
        password: loginState.password,
      });

      if (response.status === 403) {
        throw new Error("Authentication failed: Forbidden");
      }

      const token = response.data.token;

      // Set the username and update login state
      setUsername(loginState.email);
      setIsLoggedIn(true);
      // You can handle the token as needed, for example, store it in local storage or state.
      console.log("Authentication successful. Token:", token);
    } catch (error) {
      console.error("Error authenticating user:", error.message);
      // Handle error, show an error message, etc.
    }
  };

  if (isLoggedIn) {
    // Render the LoggedInPage component when the user is logged in
    return <Link to="/home" />;
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}
