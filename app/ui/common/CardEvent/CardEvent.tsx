import Image from "next/image";
import React from "react";
import { CardEventInterface } from "./CardEvent.types";
import { BadgeIndicator } from "..";
import { HeartIcon } from "@heroicons/react/24/outline";

export const CardEvent = ({
  dateTime,
  description,
  imageHeight,
  imageSrc,
  imageWidth,
  title,
  isFree,
}: CardEventInterface) => {
  return (
    <div className="max-w-52 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="relative">
        <a href="#">
          <Image
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            alt="image-card"
          />
        </a>
        <div className="absolute bottom-2 right-2 p-2 bg-white rounded-full">
          <HeartIcon className="h-6 w-6 text-yellow-500" />
        </div>
      </div>

      <div className="p-1">
        <a href="#">
          <h5 className="my-1 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-1 font-sans text-gray-700 dark:text-gray-400 text-sm">
          {description}
        </p>
        <p className="font-normal text-gray-700 dark:text-green-400 text-xs mb-8">
          {dateTime}
        </p>
        {isFree && <BadgeIndicator text="GRATIS" />}
      </div>
    </div>
  );
};
