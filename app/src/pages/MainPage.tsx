import React from "react";
import "./mainPage.scss";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="mainPageContainer">
      <div className="introContainer mainPageTextContainers">
        <h1>Lorem ipsum!</h1>
        <p>
          HLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue
          condimentum lacus, at dapibus felis euismod at. Morbi bibendum posuere
          elit, auctor pulvinar lorem blandit ut. Aenean ullamcorper ultrices
          lectus, quis eleifend nulla maximus eget. Curabitur consequat mi ac
          ante elementum, sed sodales quam lacinia. Praesent volutpat augue vel
          arcu placerat lobortis. Sed congue ante non finibus lacinia. In hac
          habitasse platea dictumst. Ut ultricies rutrum feugiat. Aliquam in
          massa lobortis, bibendum ex ut, placerat.{" "}
        </p>
      </div>
      <Link to="resume" className="cvButton mainPageTextContainers button">
        <h2>Trykk for å se min cv</h2>
      </Link>
      <Link to="blog" className="blogButton mainPageTextContainers button">
        <h2>Les bloggen min her</h2>
      </Link>
    </div>
  );
}

export default MainPage;
