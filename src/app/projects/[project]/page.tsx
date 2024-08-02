import Breadcrumb from "@/app/company/components/breadcrumb/Breadcrumb";
import React from "react";
import css from "./projects.module.scss";
import Image from "next/image";
import { fetchQuery } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";
import { reverseTransliterate } from "@/lib/translicate";
import { Id } from "../../../../convex/_generated/dataModel";
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
            />
          </div>
          <div className={css.side}>
            <div className={css.aboutProjectHeader}>
              <Image
                src={projectData.subImage}
                alt=""
                width={640}
                height={396}
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
      </div>
    </main>
  );
};

export default page;
