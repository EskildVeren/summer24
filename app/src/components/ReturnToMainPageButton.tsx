import { Link } from "react-router-dom";

function ReturnToMainPageButton() {
  return (
    <Link to={"/"} className="returnToMainPage button">
      Tilbake til forsiden
    </Link>
  );
}

export default ReturnToMainPageButton;
