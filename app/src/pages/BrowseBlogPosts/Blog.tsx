import ReturnToMainPageButton from "../../components/ReturnToMainPageButton";
import "./blog.scss";
import { Link } from "react-router-dom";

export function Blog() {
  const blogCardMocks: BlogCard[] = returnBlogCardMocks();
  return (
    <>
      <ReturnToMainPageButton />
      <div className="pageContainer">
        <div className="pageSection">
          <h1>Velkommen til bloggen min!</h1>
        </div>
        <div className="blogCardContainer">
          {blogCardMocks.map((blogCard: BlogCard) => {
            return (
              <Link
                className="blogCard"
                to={blogCard.title}
                id={String(blogCard.id)}
              >
                <img src={blogCard.imageUrl} />
                <p>{blogCard.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export type BlogCard = {
  id: number;
  title: string;
  imageUrl: string;
};

const returnBlogCardMocks = () => {
  const blogCardMocks: BlogCard[] = [
    {
      id: 0,
      title: "Hvordan lage hjemmelaget kattesand!!!!",
      imageUrl:
        "https://www.ravizupa.com/wp-content/uploads/2022/08/sickeninggrammar_750.jpg",
    },
    {
      id: 1,
      title: "Spis bønna",
      imageUrl:
        "https://www.ravizupa.com/wp-content/uploads/2022/08/sickeninggrammar_750.jpg",
    },
    {
      id: 2,
      title:
        "Jeg er veldig glad i kattepuser, menher er to kattepuser som bokser. Er denne tittelen altfor lang?????",
      imageUrl:
        "https://www.ravizupa.com/wp-content/uploads/2022/08/sickeninggrammar_750.jpg",
    },
    {
      id: 3,
      title: "kort.",
      imageUrl:
        "https://www.ravizupa.com/wp-content/uploads/2022/08/sickeninggrammar_750.jpg",
    },
    {
      id: 4,
      title: "CAPS!",
      imageUrl:
        "https://www.ravizupa.com/wp-content/uploads/2022/08/sickeninggrammar_750.jpg",
    },
    {
      id: 5,
      title: "Enda en ny tittel",
      imageUrl:
        "https://www.ravizupa.com/wp-content/uploads/2022/08/sickeninggrammar_750.jpg",
    },
    {
      id: 6,
      title: "Mine nye meninger om liver",
      imageUrl:
        "https://www.ravizupa.com/wp-content/uploads/2022/08/sickeninggrammar_750.jpg",
    },
    {
      id: 7,
      title: "cat",
      imageUrl:
        "https://www.ravizupa.com/wp-content/uploads/2022/08/sickeninggrammar_750.jpg",
    },
  ];
  return blogCardMocks;
};
