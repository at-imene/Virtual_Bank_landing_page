import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignInContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: linear-gradient(108deg, #38a86e 0%, #27754d 100%);
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.3em;
  font-weight: 600;
  color: #ffffff;
  position: absolute;
  top: 2rem;
  left: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 1.8em;
    top: 1.5rem;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const FormWrapper = styled.form`
  background: #010606;
  height: 550px;
  width: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em 1.5em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  color: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 768px) {
    transition: all 0.2s ease-in-out;
    width: 80%;
    max-width: 420px;
    height: 470px;
  }

  @media screen and (max-width: 420px) {
    width: 90%;
  }

  @media screen and (max-height: 640px) {
    height: 440px;
  }
`;

export const FormHeading = styled.h3`
  font-size: 1.4em;
  font-weight: 500;
  margin-bottom: 1.8em;
  text-align: center;
`;

export const FormLabel = styled.label`
  display: block;
`;

export const FormInput = styled.input`
  height: 50px;
  width: 100%;
  border-radius: 5px;
  border: none;
  margin: 1em 0;
  padding-left: 0.9em;
  line-height: 1.2em;
`;

export const FormButton = styled.button`
  width: 100%;
  font-size: 1.2em;
  padding: 1em;
  border: none;
  border-radius: 5px;
  background-color: #38a86e;
  color: #fff;
  margin: 1em 0;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 1em;
  text-align: center;
  cursor: pointer;
`;
