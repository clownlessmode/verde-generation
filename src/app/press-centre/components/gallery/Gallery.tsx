"use client";

import React, { useState } from "react";
import css from "./Gallery.module.scss";
import Breadcrumb from "@/app/company/components/breadcrumb/Breadcrumb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Id } from "../../../../../convex/_generated/dataModel";
import Image from "next/image";

// Модальное окно для просмотра изображения
interface ModalProps {
  images: string[];
  selectedIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Modal: React.FC<ModalProps> = ({
  images,
  selectedIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const swipeDistance = touchStartX - touchEndX;

      if (swipeDistance > 50) {
        onNext();
      } else if (swipeDistance < -50) {
        onPrev();
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={css.modalOverlay}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={css.modalContent}>
        <Image
          src={images[selectedIndex]}
          alt="Expanded View"
          className={css.modalImage}
          layout="responsive"
          width={1600} // Указываем ширину изображения
          height={900} // Указываем высоту изображения
        />
        <button className={`${css.navButton} ${css.left}`} onClick={onPrev}>
          &#8249; {/* Стрелка влево */}
        </button>
        <button className={`${css.navButton} ${css.right}`} onClick={onNext}>
          &#8250; {/* Стрелка вправо */}
        </button>
      </div>
      <button className={css.closeButton} onClick={onClose}>
        &#10005; {/* Крестик */}
      </button>
    </div>
  );
};

type GalleryData = {
  _id: Id<"gallery">;
  _creationTime: number;
  image: string;
  type: "life" | "production";
};

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
  _creationTime: number;
  title: string;
  description: string;
  mainImage: string;
  subImage: string;
  dates?: Dates[];
  stats: Stats[];
}

type Props = {
  galleryData: GalleryData[];
  projects: Project[];
};

const formatDate = (dateString: number) => {
  const date = new Date(dateString);
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const separateGalleryItems = (items: GalleryData[]) => {
  const lifeItems = items.filter((item) => item.type === "life");
  const productionItems = items.filter((item) => item.type === "production");

  return { lifeItems, productionItems };
};

const Gallery: React.FC<Props> = ({ galleryData, projects }) => {
  const { lifeItems, productionItems } = separateGalleryItems(galleryData);

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);

  const openModal = (gallery: string[], index: number) => {
    setCurrentGallery(gallery);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex! > 0 ? prevIndex! - 1 : currentGallery.length - 1
      );
    }
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prevIndex) =>
        prevIndex! < currentGallery.length - 1 ? prevIndex! + 1 : 0
      );
    }
  };

  return (
    <>
      <section className={css.wrapper}>
        <Breadcrumb initial="Пресс-Центр" page="Фотогалерея" />
        <div className={css.content}>
          <h1>Наше производство</h1>
          <Carousel className={css.carousel}>
            <CarouselContent>
              {productionItems.map((item, index) => (
                <CarouselItem
                  className="md:basis-1/2 lg:basis-1/3"
                  key={index}
                >
                  <div
                    className={css.itemWrapper}
                    onClick={() =>
                      openModal(
                        productionItems.map((i) => i.image),
                        index
                      )
                    }
                  >
                    <div
                      className={css.item}
                      style={{
                        backgroundImage: `
                          linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 100%),
                          url(${item.image})
                        `,
                        backgroundSize: "auto, cover",
                        backgroundPosition: "center, center",
                        backgroundRepeat: "no-repeat, no-repeat",
                      }}
                    >
                      <div className={css.title}>
                        <time>{formatDate(item._creationTime)}</time>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className={css.arrows}>
              <CarouselPrevious className={cn("bg-[#2e8b57]")} />
              <CarouselNext className={cn("bg-[#2e8b57]")} />
            </div>
          </Carousel>
        </div>
        <div className={css.content}>
          <h1>Наша жизнь</h1>
          <Carousel className={css.carousel}>
            <CarouselContent>
              {lifeItems.map((item, index) => (
                <CarouselItem
                  className="md:basis-1/2 lg:basis-1/3"
                  key={index}
                >
                  <div
                    className={css.itemWrapper}
                    onClick={() =>
                      openModal(lifeItems.map((i) => i.image), index)
                    }
                  >
                    <div
                      className={css.item}
                      style={{
                        backgroundImage: `
                          linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 100%),
                          url(${item.image})
                        `,
                        backgroundSize: "auto, cover",
                        backgroundPosition: "center, center",
                        backgroundRepeat: "no-repeat, no-repeat",
                      }}
                    >
                      <div className={css.title}>
                        <time>{formatDate(item._creationTime)}</time>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className={css.arrows}>
              <CarouselPrevious className={cn("bg-[#2e8b57]")} />
              <CarouselNext className={cn("bg-[#2e8b57]")} />
            </div>
          </Carousel>
        </div>
        <div className={css.content}>
          <h1>Наши проекты</h1>
          <Carousel className={css.carousel}>
            <CarouselContent>
              {projects.map((item, index) => (
                <CarouselItem
                  className="md:basis-1/2 lg:basis-1/3"
                  key={index}
                >
                  <Link href={`/projects/${item._id}`} className={css.itemWrapper}>
                    <div
                      className={css.item}
                      style={{
                        backgroundImage: `
                          linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 100%),
                          url(${item.mainImage})
                        `,
                        backgroundSize: "auto, cover",
                        backgroundPosition: "center, center",
                        backgroundRepeat: "no-repeat, no-repeat",
                      }}
                    >
                      <div className={css.title}>
                        <h3>{item.title}</h3>
                        <time>{formatDate(item._creationTime)}</time>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className={css.arrows}>
              <CarouselPrevious className={cn("bg-[#2e8b57]")} />
              <CarouselNext className={cn("bg-[#2e8b57]")} />
            </div>
          </Carousel>
        </div>
      </section>

      {selectedImageIndex !== null && (
        <Modal
          images={currentGallery}
          selectedIndex={selectedImageIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
};

export default Gallery;
