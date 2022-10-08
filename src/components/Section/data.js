import svg1 from "../../images/car.svg";
import svg2 from "../../images/svg_transactions.svg";
import login from "../../images/login.svg";

export var aboutObj = {
  id: "about",
  src: svg1,
  startImg: false,
  darkBg: true,
  topText: "Premuim bank",
  heading: "Unlimited Transactions with zero fees",
  description:
    "Get access to our unlimited app that allows you to send unlimited transactions without any fees",
  btnText: "Get Started",
  primary: true,
};

export var discoverObj = {
  id: "discover",
  src: login,
  startImg: true,
  darkBg: false,
  topText: "Unltimite access",
  heading: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  btnText: "Learn More",
  primary: false,
};

export var signUpObj = {
  id: "signup",
  src: svg2,
  startImg: false,
  darkBg: false,
  topText: "Premuim bank",
  heading: "Creating an account is extremely easy",
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  btnText: "Start Now",
  primary: false,
};
