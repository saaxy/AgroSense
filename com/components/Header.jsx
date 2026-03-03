import { Fragment } from "react";

const Header = (page = "other") => {
  if (page === "Login") {
    // In the Header section, show the logo and profile button on the left side.
    // And below the logo: "A Farmer's Friend"
    return (
      <Fragment>
        <img src="../assets/logo.png" alt="AgroSense Logo" height={50} />
        <h2>A Farmer's Friend</h2>
      </Fragment>
    );
  } else if (page === "Main") {
    return (
      <Fragment>
        <img src="../assets/logo.png" alt="AgroSense Logo" height={50} />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <img src="../assets/logo.png" alt="AgroSense Logo" height={50} />
    </Fragment>
  );
};

export default Header;
