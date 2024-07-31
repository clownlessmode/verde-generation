import React from "react";
import Team from "../components/team/Team";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex flex-col gap-20 justify-center items-center">
      <Team />
    </main>
  );
};

export default page;
