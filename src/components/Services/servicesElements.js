import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #010101;

  @media screen and (max-width: 1000px) {
    height: auto;
    padding: 50px 0;
  }

  @media screen and (max-width: 468) {
    height: auto;
    padding: 50px 0;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 1em;
  color: #fff;
`;

export const ServicesWrapper = styled.div`
  display: grid;
  max-width: 1200px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5em;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 30px 10px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 30px;
  } ;
`;
export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 400px;
  max-width: 360px;
  padding: 3em 2.5em;
  margin: 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    max-width: 490px;
  }
`;

export const ServiceIcon = styled.img`
  width: 10em;
  margin-bottom: 2.4em;
`;

export const ServicesH2 = styled.h2`
  font-size: 1.45rem;
  margin-bottom: 0.6em;

  text-align: center;
`;

export const ServicesP = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;
