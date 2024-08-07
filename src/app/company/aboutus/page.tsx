import React from "react";
import Textaboutus from "../components/textaboutus/Textaboutus";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex flex-col gap-10 justify-center items-center">
      <Textaboutus />
    </main>
  );
};

export default page;
