import React from "react";
import "./mainPage.scss";

function MainPage() {
  return (
    <div className="mainPageContainer">
      <div className="introContainer mainPageTextContainers">
        <p>Halla, dettte er nettsida mi</p>
      </div>
      <div className="lowerContainer">
        <div className="cvButton mainPageTextContainers">
          <p>Trykk for å se min cv</p>
        </div>
        <div className="blogButton mainPageTextContainers">
          <p>Les bloggen min her</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
