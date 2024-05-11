import ReturnToMainPageButton from "../components/ReturnToMainPageButton";
import "./resume.scss";

function Resume() {
  return (
    <>
      <ReturnToMainPageButton />
      <div className="resumeContainer">
        <div className="resumeSection">
          <h1>Her er CV-en min!</h1>
          <p>
            Heihei, mitt navn er Eskild. eg er en greit høy kar som kommer fra
            et koselig lite sted som heter Prinsdal. Under oppveksten fikk jeg
            en stor interesse i dataspill og matte, noe som naturligvis førte
            til en interesse i programmering. Nå er jeg en rykende fersk student
            på jakt etter jobb. Er du min nye arbeidsgiver?
          </p>
        </div>
        <div className="resumeSection">
          <h2>Arbeidserfaring</h2>
          <div className="experiencePoint">
            <div className="experienceTitlecontainer">
              <p>Assistent til lærer</p>
              <p>Sommerferien 2021 og 2022</p>
            </div>
            <p>
              Sommerskolen Oslo, assistent i kurs som lærer opp ulike grupper i
              scratch
            </p>
          </div>
        </div>
        <div className="resumeSection"></div>
      </div>
    </>
  );
}

export default Resume;
