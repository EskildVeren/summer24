import { useState } from "react";
import "./createBlogPost.scss";
import ReturnToMainPageButton from "../../components/ReturnToMainPageButton";

type Content = {
  className: string;
  text: string;
};

type BlogPost = {
  image: string;
  content: Content[];
};

function CreateBlogPost() {
  const initiatedBlogPost: BlogPost = { image: "", content: [] };
  const [userInput, setUserInput] = useState(initiatedBlogPost);

  const handleUserInput = (textInput: string) => {
    setUserInput(parseUserInput(textInput));
    console.log(parseUserInput(textInput));
  };

  return (
    <>
      <ReturnToMainPageButton />
      <div className="pageContainer">
        <div className="pageSection">
          <textarea
            onChange={(e) => handleUserInput(e.target.value)}
            className="blogPostEditor"
          ></textarea>
        </div>
      </div>
      <div className="pageContainer">
        {userInput.content.map((data: Content) => {
          return (
            <div className="pageSection">
              <p className={data.className}>{data.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CreateBlogPost;

const parseUserInput = (rawInput: string) => {
  const inputList = rawInput.split("|");
  const parsedContent: BlogPost = { image: "", content: [] };
  for (let i = 2; i < inputList.length; i += 2) {
    parsedContent.content.push({
      className: inputList[i - 1],
      text: inputList[i],
    });
  }
  return parsedContent;
};
