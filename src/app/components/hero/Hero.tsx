"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./Hero.module.scss";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/assets/hero/background2.png",
  ]; // Replace with your image paths

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 400000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={css.wrapper}
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        transition: "background-image 2s ease-in-out",
        filter: currentImage === 1 ? "brightness(1)" : "none",
      }}
    >
      <h1>Комплексный подход к разработке нефтегазовых месторождений</h1>
      <div>
        <Link href={"mailto:info@verdeg.com"}>
          <Button variant={"secondary"}>Связаться с нами</Button>
        </Link>
        <Link href="/company/aboutus">
          <Image alt="" src="/assets/hero/arrow.svg" width={24} height={24} />
          <p>Узнать больше</p>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
