import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Advantages from "../components/advantages/Advantages";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex flex-col gap-20 justify-center items-center">
      <Advantages />
    </main>
  );
};

export default page;
