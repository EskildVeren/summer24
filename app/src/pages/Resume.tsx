import ReturnToMainPageButton from "../components/ReturnToMainPageButton";
import "./resume.scss";
import eskild from "../assets/Eskild_er_meg.jpg";

type workExperience = {
  title: string;
  timePeriod: string;
  employer: string;
  description: string;
};

type resumeSectionData = {
  sectionName: string;
  experiencePoints: workExperience[];
};

function Resume() {
  const resumeData = getWorkExperience();
  return (
    <>
      <ReturnToMainPageButton />
      <div className="pageContainer">
        <div className="pageSection">
          <h1>Her er noe av hva jeg har gjort</h1>
          <div className="introduction">
            <p>
              Heihei, mitt navn er Eskild. eg er en greit høy kar som kommer fra
              et koselig lite sted som heter Prinsdal. Under oppveksten fikk jeg
              en stor interesse i dataspill og matte, noe som naturligvis førte
              til en interesse i programmering. Nå er jeg en rykende fersk
              student på jakt etter jobb. Er du min nye arbeidsgiver?
            </p>
            <img src={eskild} />
          </div>
        </div>
        {resumeData.map((resumeSection) => {
          return (
            <div className="pageSection">
              <h2>{resumeSection.sectionName}</h2>
              {resumeSection.experiencePoints.map(
                (experiencePoint: workExperience) => {
                  return (
                    <div className="experiencePoint">
                      <div className="experienceTitlecontainer">
                        <p>{experiencePoint.title}</p>
                        <p>{experiencePoint.timePeriod}</p>
                      </div>
                      <p>
                        {experiencePoint.employer},{" "}
                        {experiencePoint.description}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Resume;

const getWorkExperience = (): resumeSectionData[] => {
  return [
    {
      sectionName: "Arbeidserfaring",
      experiencePoints: [
        {
          title: "Sommerskolen Oslo",
          timePeriod: "Sommerene 2021, 2022",
          employer: "Sommerskolen Oslo",
          description:
            "Sommerskolen Oslo, assistent i kurs som lærer opp ulike grupper i scratch",
        },
        {
          title: "Sommerskolen Oslo",
          timePeriod: "Sommerene 2021, 2022",
          employer: "Sommerskolen Oslo",
          description:
            "Sommerskolen Oslo, assistent i kurs som lærer opp ulike grupper i scratch",
        },
        {
          title: "Sommerskolen Oslo",
          timePeriod: "Sommerene 2021, 2022",
          employer: "Sommerskolen Oslo",
          description:
            "Sommerskolen Oslo, assistent i kurs som lærer opp ulike grupper i scratch",
        },
        {
          title: "Sommerskolen Oslo",
          timePeriod: "Sommerene 2021, 2022",
          employer: "Sommerskolen Oslo",
          description:
            "Sommerskolen Oslo, assistent i kurs som lærer opp ulike grupper i scratch",
        },
        {
          title: "Sommerskolen Oslo",
          timePeriod: "Sommerene 2021, 2022",
          employer: "Sommerskolen Oslo",
          description:
            "Sommerskolen Oslo, assistent i kurs som lærer opp ulike grupper i scratch",
        },
        {
          title: "Sommerskolen Oslo",
          timePeriod: "Sommerene 2021, 2022",
          employer: "Sommerskolen Oslo",
          description:
            "Sommerskolen Oslo, assistent i kurs som lærer opp ulike grupper i scratch",
        },
        {
          title: "Sommerskolen Oslo",
          timePeriod: "Sommerene 2021, 2022",
          employer: "Sommerskolen Oslo",
          description:
            "Sommerskolen Oslo, assistent i kurs som lærer opp ulike grupper i scratch",
        },
      ],
    },
  ];
};
