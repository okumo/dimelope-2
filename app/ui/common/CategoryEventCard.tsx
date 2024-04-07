import Image from "next/image";
import React from "react";

export const CategoryEventCard = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="p-2">
      <Image
        src={imageUrl}
        width={100}
        height={100}
        alt="vaope-cajamarca"
        className="rounded-xl"
      />
    </div>
  );
};
