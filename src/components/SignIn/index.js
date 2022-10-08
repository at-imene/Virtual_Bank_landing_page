import React from "react";
import {
  FormButton,
  FormHeading,
  FormInput,
  FormLabel,
  FormWrapper,
  Logo,
  SignInContainer,
  Text,
} from "./signinElements";

const SignInComponent = () => {
  return (
    <SignInContainer>
      <Logo to="/">Dolloa</Logo>
      <FormWrapper action="#">
        <FormHeading>Sign in to your account</FormHeading>
        <FormLabel htmlFor="for">Email</FormLabel>
        <FormInput type="email" required />
        <FormLabel htmlFor="for">Password</FormLabel>
        <FormInput type="password" required />
        <FormButton type="submit">Continue</FormButton>
        <Text>Forget password?</Text>
      </FormWrapper>
    </SignInContainer>
  );
};

export default SignInComponent;
