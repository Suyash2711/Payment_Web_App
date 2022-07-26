import React, { useContext, useEffect, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";

export function LoginForm(props, { history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credentialError, setCredentialError] = useState("");
  const [error, setError] = useState("");
  const { switchToSignup } = useContext(AccountContext);

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      // history.push(`/dashboard`);
      window.location.href = "/dashboard";
    }
  }, [history]);

  const login = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userId", data.id);
      window.location.href = "/dashboard";
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={login}>
        Signin
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
