import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Textaboutus from "../components/textaboutus/Textaboutus";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex flex-col gap-10 justify-center items-center">
      <Textaboutus />
      <Image
        alt=""
        src={"/assets/company/aboutus/npz.png"}
        height={894}
        width={1280}
        style={{
          maxHeight: "894px",
          maxWidth: "1270px",
          objectFit: "cover",
        }}
      />
    </main>
  );
};

export default page;
