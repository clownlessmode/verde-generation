import React from "react";
import css from "./Breadcrumb.module.scss";
interface Props {
  initial: string;
  page: string;
}
const Breadcrumb = ({ initial, page }: Props) => {
  return (
    <section className={css.wrapperBreadcrumb}>
      <p className={css.breadcrumb}>
        <span className={css.breadcrumbSpan}>{initial} / </span>
        {page}
      </p>
    </section>
  );
};

export default Breadcrumb;
