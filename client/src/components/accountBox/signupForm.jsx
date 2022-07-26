import React, { useState, useContext } from "react";
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

export function SignupForm(props, { history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const { switchToSignin } = useContext(AccountContext);

  async function signup() {
    console.warn(name, email, password, cpassword);
    let item = { name, email, password, cpassword };
    let result = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/");
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
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
        <Input
          type="password"
          onChange={(e) => setCpassword(e.target.value)}
          placeholder="Confirm Password"
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={signup}>
        SignUp
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          SignIn
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
