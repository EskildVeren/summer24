import React from "react";
import ReturnToMainPageButton from "../components/ReturnToMainPageButton";
import "./resume.scss";
import { useParams } from "react-router-dom";

function BlogArticlePage() {
  const { articleTitle } = useParams();
  return (
    <>
      <ReturnToMainPageButton />
      <div className="pageContainer">
        <p>Velkommen til min artikkel om {articleTitle}! </p>
      </div>
      ;
    </>
  );
}

export default BlogArticlePage;
