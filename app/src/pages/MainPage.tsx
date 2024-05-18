import React from "react";
import "./mainPage.scss";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="mainPageContainer">
      <div className="introContainer mainPageTextContainers">
        <h1>Velkommen til nettsiden min!</h1>
        <p>
          Heihei, mitt navn er Eskild. eg er en greit høy kar som kommer fra et
          koselig lite sted som heter Prinsdal. Under oppveksten fikk jeg en
          stor interesse i dataspill og matte, noe som naturligvis førte til en
          interesse i programmering. Nå er jeg en rykende fersk student på jakt
          etter jobb. Er du min nye arbeidsgiver? Om du er det eller ei kan du
          vel uansett ta deg en titt rundt. På denne nettsiden finner du både
          CV-en min og en liten matblogg. Bare å ta et par pastaoppskrifter når
          du ført er innom!
        </p>
      </div>
      <Link
        to="resume"
        className="mainPageButton mainPageTextContainers button"
      >
        <h2>Trykk for å se min cv</h2>
      </Link>
      <Link to="blog" className="mainPageButton mainPageTextContainers button">
        <h2>Les bloggen min her</h2>
      </Link>
    </div>
  );
}

export default MainPage;
