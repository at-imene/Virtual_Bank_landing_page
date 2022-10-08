import React from "react";
import {
  ServiceIcon,
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
} from "./servicesElements";
import icon1 from "../../images/handsome.svg";
import icon2 from "../../images/login.svg";
import icon3 from "../../images/svg1.svg";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServiceIcon src={icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServiceIcon src={icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            You can access our platform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServiceIcon src={icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
