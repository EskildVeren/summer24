import { Link } from "react-router-dom";

function ReturnToMainPageButton() {
  return (
    <Link to={"/"} className="returnToMainPage button">
      {"Return to main page"}
    </Link>
  );
}

export default ReturnToMainPageButton;
