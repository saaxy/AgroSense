import { Fragment } from "react";

const Header = ({ page }) => {
  if (page === "Login") {
    // In the Header section, show the logo
    // And below the logo: "A Farmer's Friend"
    return (
      <div className="flex items-center justify-center gap-4">
        <img src="../assets/logo.png" alt="AgroSense Logo" className="h-20" />
        <h2>A Farmer's Friend</h2>
      </div>
    );
  } else if (page === "Main") {
    // addition of profile
    return (
      <Fragment>
        <img src="../assets/logo.png" alt="AgroSense Logo" height={50} />
      </Fragment>
    );
  }
  return (
    <div className="flex items-center justify-center gap-4">
      <img src="../assets/logo.png" alt="AgroSense Logo" className="h-10" />
    </div>
  );
};
export default Header;
