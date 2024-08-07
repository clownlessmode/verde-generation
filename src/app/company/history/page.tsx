import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Texthistory from "../components/texthistory/Texthistory";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex flex-col gap-10 justify-center items-center">
      <Texthistory />
      
    </main>
  );
};

export default page;
