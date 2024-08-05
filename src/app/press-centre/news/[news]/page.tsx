import React from "react";
import Breadcrumb from "@/app/company/components/breadcrumb/Breadcrumb";
import { api } from "../../../../../convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Id } from "../../../../../convex/_generated/dataModel";
import css from "./News.module.scss";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

const page = async ({ params }: { params: { news: Id<"news"> } }) => {
  const newsData = await fetchQuery(api.news.getNewsById, {
    id: params.news,
  });

  return (
    <section className={css.wrapper}>
      <Breadcrumb initial="Новости" page={newsData?.title as string} />
      <div>
        <h1>
          <span>{newsData?.title as string}</span>
        </h1>
      </div>
      <div className={cn("markdown-body")}>
        <ReactMarkdown className={"max-w-1280px text-wrap"}>
          {newsData?.main as string}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default page;
