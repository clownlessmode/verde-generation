import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Texthistory from "../components/texthistory/Texthistory";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex flex-col gap-10 justify-center items-center">
      <Texthistory />
      <Image
        alt=""
        src={"/assets/company/aboutus/npz.png"}
        height={894}
        width={1280}
      />
    </main>
  );
};

export default page;
