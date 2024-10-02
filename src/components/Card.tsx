"use client";

import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import Rating from "@mui/material/Rating";

interface Props {
  hospitalName: string;
  imgSrc: string;
  rating: number;
  onRatingChange: (hospitalName: string, newRating: number | null) => void;
  hid: string;
}

export default function Card({ hospitalName, imgSrc, rating, onRatingChange, hid }: Props) {
  return (
    <InteractiveCard contentName={hospitalName} hid={hid}>
      <div className="w-full h-[60%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt={imgSrc}
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[40%] p-[20px] text-black">
        {hospitalName}
        <div className="">
          <Rating
            name={`${hospitalName} Rating`}
            id={`${hospitalName} Rating`}
            data-testid={`${hospitalName} Rating`}
            value={rating}
            onChange={(event, newValue) => {
              onRatingChange(hospitalName, newValue);
            }}
          />
        </div>
      </div>
    </InteractiveCard>
  );
}
