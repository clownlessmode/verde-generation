import Breadcrumb from "@/app/company/components/breadcrumb/Breadcrumb";
import React from "react";
import css from "./projects.module.scss";
import Image from "next/image";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";
import { reverseTransliterate } from "@/lib/translicate";
import { Id } from "../../../../convex/_generated/dataModel";
const findProjectMaps = (projectId: string) => {
  const projectGround = grounds.find((ground) => ground.id === projectId);
  return projectGround ? projectGround.maps : [];
};

interface MapEntry {
  title: string;
  map: React.ReactElement;
}

interface Ground {
  id: string;
  maps: MapEntry[]; // This should only be an array of MapEntry objects
}

const grounds: Ground[] = [
  {
    id: "jd7amnp1ve34a12wc8yvny0f4n6ypscx", // Узбекистан
    maps: [
      {
        title: "",
        map: (
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A6b98806f2640b15ed958a5957d9aa4430cc13535b0bc69075928b2a6b3b42331&amp;source=constructor"
            width="1280"
            height="360"
          ></iframe>
        ),
      },
      {
        title: "",
        map: (
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A998d874ef03f8d0f8a3540fa627b0293ec8fa86a18a91d0ace85d8051bb418e0&amp;source=constructor"
            width="1280"
            height="360"
          ></iframe>
        ),
      },
      {
        title: "",
        map: (
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ade358d294b7d9fd38ea80144a7428e86b0c8146239a05301150831607c1994c2&amp;source=constructor"
            width="1280"
            height="360"
          ></iframe>
        ),
      },
    ],
  },
  {
    id: "jd71vrmqprcy2f3hgmkc4h10x56yqhgc", // Пенза
    maps: [
      {
        title: "",
        map: (
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4bec6bbdefa5ba9ea5a23393f873c709c6b5cdd8fa231f952881941954b9ee3d&amp;source=constructor"
            width="1280"
            height="360"
          ></iframe>
        ),
      },
      {
        title: "",
        map: (
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae6852e9ba7c427687f035a8814f2faa6ef079d421168d58910b6536ffcb65340&amp;source=constructor"
            width="1280"
            height="360"
          ></iframe>
        ),
      },
    ],
  },
  {
    id: "jd718rew9vj8n5w02jb8h0s2nn6yqg82", // Урал
    maps: [
      {
        title: "",
        map: (
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A5a52cdce5035a776aaf995bfc6482c194a065801a994d298ddc20ea48816718c&amp;source=constructor"
            width="1280"
            height="360"
          ></iframe>
        ),
      },
    ],
  },
  {
    id: "jd7dcean37hqdsbhnbjxhn3rg56ypybp", // волга
    maps: [
      {
        title: "",
        map: (
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aac58d962b86eb0b4c9db8a2b9bdb39b1be9b83890819df6585bc32ba7ebeaab5&amp;source=constructor"
            width="1280"
            height="360"
            frameBorder="0"
          ></iframe>
        ),
      },
      {
        title: "",
        map: (
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Adf2fbf5dbe3056204a901eec24d9b54fd858f1b3fe5d086bce78c287b61aad38&amp;source=constructor"
            width="1280"
            height="360"
            frameBorder="0"
          ></iframe>
        ),
      },
    ],
  },
  {
    id: "jd7fkbx310ssnyb01f9ns6dqy56y00he", // ТПГК
    maps: [
      {
        title: "",
        map: (
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0856ddb1c7285023d1eb7d2819237878932b1614735d970d0fdbf2793b2c3b55&amp;source=constructor"
            width="1280"
            height="360"
            frameBorder="0"
          ></iframe>
        ),
      },
    ],
  },
];

interface Dates {
  timestart: string;
  timeend: string;
  compnames: string;
  names: string;
}

interface Stats {
  title: string;
  value: string;
}

interface Project {
  _id: Id<"projects">;
  title: string;
  description: string;
  mainImage: string;
  subImage: string;
  dates?: Dates[];
  stats: Stats[];
}
const page = async ({ params }: { params: { project: Id<"projects"> } }) => {
  const projectData: Project = (await fetchQuery(api.projects.getProject, {
    projectId: params.project,
  })) as Project;
  const projectMaps = findProjectMaps(params.project);
  return (
    <main className={css.wrapper}>
      <Breadcrumb initial="Проекты" page={projectData.title} />
      <div className={css.wrapperProject}>
        <div className={css.sides}>
          <div className={css.side}>
            <div className={css.header}>
              <h2>{projectData.title}</h2>
              <p>{projectData.description}</p>
            </div>
            <Image
              src={projectData.mainImage}
              alt=""
              width={629}
              height={601}
              className={css.mainImage}
            />
          </div>
          <div className={css.side}>
            <div className={css.aboutProjectHeader}>
              <Image
                src={projectData.subImage}
                alt=""
                width={640}
                height={396}
                className={css.subImage}
              />
              {projectData.title === "Volga Gas" && projectData.dates && (
                <div className={css.dates}>
                  {projectData.dates.map((date, index) => (
                    <div className={css.date} key={index}>
                      <time dateTime={date.timestart + " - " + date.timeend}>
                        {date.timestart + " - " + date.timeend}
                      </time>
                      <p>{date.compnames}</p>
                      <p>{date.names}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={css.stats}>
              {projectData.stats.map((stat, index) => (
                <div key={index}>
                  <div className={css.statsItem}>
                    <h3>{stat.title}</h3>
                    <p>{stat.value}</p>
                  </div>
                  {index < projectData.stats.length - 1 && (
                    <div className={css.separator} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {projectMaps.length > 0 && (
          <div className="flex flex-col gap-3">
            {projectMaps.map((mapEntry, index) => (
              <div key={`${params.project}-${index}`} className={css.mapItem}>
                <h3>{mapEntry.title}</h3>
                {mapEntry.map}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default page;
