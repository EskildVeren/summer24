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
              student på jakt etter jobb. Derfor har jeg laget denne nettsiden
              for å vise hvem jeg er. Den er kanskje ikke den vakreste nettsiden
              akkurat nå, men jeg prøver å eksperimentere med nye spennende
              stiler. Senere vil jeg utvide denne nettsiden med en oversikt over
              hva jeg har laget, samt en liten blogg hvor jeg kan dele mine
              meninger på mat. Gjerne ta en titt på det som er her nå, og hvem
              vet. Kanskje du er min neste arbeidsgiver?
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
                        {experiencePoint.employer}
                        {". "}
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
      sectionName: "Utdanning",
      experiencePoints: [
        {
          title: "Bachelor informatikk",
          timePeriod: "2021-2024",
          employer: "NTNU Trondheim",
          description: "Studerte her sammen med mange flotte venner",
        },
        {
          title: "Fullført videregående",
          timePeriod: "2018-2021",
          employer: "Oslo Katedralskole",
          description:
            "Studiespesialisering med realfag. Fullførte valgfag innen fysikk, matematikk, programmering og filosofi",
        },
      ],
    },
    {
      sectionName: "Arbeidserfaring",
      experiencePoints: [
        {
          title: "Læringsassistent",
          timePeriod: "Høstsemesteret 2022 og 2023",
          employer: "NTNU Trondheim",
          description:
            "Holdt øvingstimer og rettet innleveringer i emnet MA0001: Brukerkurs i matematikk",
        },
        {
          title: "Sommerskolen Oslo",
          timePeriod: "Sommerene 2021, 2022",
          employer: "Sommerskolen Oslo",
          description:
            "Sommerskolen Oslo, assistent i kurs som lærer opp ulike grupper i scratch",
        },
        {
          title: "Kodeinstruktør",
          timePeriod: "2017-2018",
          employer: "Kodegenet/Lær Kidsa Koder",
          description: "Opplærte ulike grupper fra SFO i Scratch",
        },
      ],
    },
    {
      sectionName: "Frivillige verv",
      experiencePoints: [
        {
          title: "nestleder, kommunikasjonsansvarlig ",
          timePeriod: "2022 – Pågående",
          employer: "Profil- og aviskomiteen ",
          description:
            "Forkortet til prokom, er linjforeningens ansikt innad og utad linjeforeningen. Vi lager profileringsmateriale og linjeforeningsavisa offline",
        },
        {
          title: "Speider",
          timePeriod: "2013 – 2022",
          employer: "Norges Speiderforbund",
          description:
            "Har vært innom mye fra småspeider til rover. Deriblant arrangering av speiderleir og lederrolle på speidertur",
        },
        {
          title: "Minileder i kirka",
          timePeriod: "2017 – 2018",
          employer: "Prinsdal-Hauketo kirke",
          description:
            "Hjalp hovedsaklig til med arrangering av konfirmasjonsoppgjøret året etter at jeg var konfirmant selv. Var også med på en del annen frivillig arbeid i kirka som involverte de yngre",
        },
        {
          title: "Frivilig på infobod",
          timePeriod: "Sommeren 2022",
          employer: "Øyafestivalen",
          description:
            "Sto i en bod og gav informasjon til de som spurte. Involverte hovedsakelig å lede tørste deltakere til nærmeste vannstasjon",
        },
      ],
    },
    {
      sectionName: "Kurs",
      experiencePoints: [
        {
          title: "LAOS",
          timePeriod: "Høst 2022",
          employer:
            "Institutt for datateknologi og informatikk, NTNU Trondheim",
          description:
            "Pedagogisk kurs som kreves om du er læringsassistent på NTNU",
        },
      ],
    },
    {
      sectionName: "Erfaringer",
      experiencePoints: [
        {
          title: "Bachelorprosjekt",
          timePeriod: "",
          employer: "",
          description:
            "Jobbet backend med AWS. Vi skulle programmere en enhet til å kunne brukes for å holde styr på hva en bruker gjør i løpet av en dag. Vi brukte AWS tjenester som Lambda, DynamoDB, Cloudformation, API Gateway, Cognito og IoT Core",
        },
        {
          title: "Emne: Webutvikling",
          timePeriod: "",
          employer: "",
          description:
            "Jobbet i team for å utvikle flere nettsider der jeg har brukt React med typescript, Tailwind CSS og ulike biblioteker for komponenter og ikoner. Vi brukte graphql for kommunikasjon mellom backend og frontend",
        },
        {
          title: "Kunstig intelligens",
          timePeriod: "",
          employer: "",
          description:
            "Jeg har hatt flere emner der jeg har lært om kunstig intelligens. To av emnene fokuserte på teori, mens det tredje handlet om å bruke maskinlæring for å bygge modeller for klassifikasjonsproblemer gitt et datasett fra en koreansk helseundersøkelse",
        },
      ],
    },
  ];
};
