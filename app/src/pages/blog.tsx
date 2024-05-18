import React from "react";
import ReturnToMainPageButton from "../components/ReturnToMainPageButton";
import "./blog.scss";

export function Blog() {
  return (
    <>
      <ReturnToMainPageButton />
      <div className="pageContainer">
        <div className="pageSection">
          <h1>Velkommen til bloggen min!</h1>
        </div>
        <div className="blogCardContainer"></div>
      </div>
    </>
  );
}

export type blogCard = {
  id: number;
  title: string;
  imageUrl: string;
};
