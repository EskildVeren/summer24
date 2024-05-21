import ReturnToMainPageButton from "../components/ReturnToMainPageButton";

function ErrorPage() {
  return (
    <>
      <ReturnToMainPageButton />
      <div className="pageContainer">
        <p>Oida, her gikk noe galt</p>
      </div>
    </>
  );
}

export default ErrorPage;
