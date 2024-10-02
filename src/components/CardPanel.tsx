"use client";

import { useReducer } from "react";
import Card from "@/components/Card";
import Link from "next/link";

const initialRatings = new Map([
  ["Chulalongkorn Hospital", 0],
  ["Rajavithi Hospital", 0],
  ["Thammasat University Hospital", 0],
]);

const mockHospitalRepo = [{hid:"001", name:"Chulalongkorn Hospital", image:"/img/chula.jpg"},
{hid:"002", name:"Rajavithi Hospital", image:"/img/rajavithi.jpg"},
{hid:"003", name:"Thammasat University Hospital", image:"/img/thammasat.jpg"}]


function ratingsReducer(state: Map<string, number>, action: { type: string, hospital: string, rating: number }) {
  const newState = new Map(state);
  switch (action.type) {
    case "SET_RATING":
      newState.set(action.hospital, action.rating);
      return newState;
    case "DELETE":
      // const newState = new Map(state);
      newState.delete(action.hospital);
      return newState;
    default:
      return state;
  }
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingsReducer, initialRatings);

  const handleRatingChange = (hospitalName: string, newRating: number | null) => {
    if (newRating !== null) {
      dispatch({ type: "SET_RATING", hospital: hospitalName, rating: newRating });
    } else{
      dispatch({type: "DELETE", hospital: hospitalName, rating: 0})
    }
  };

  const hospitals = [
    { hospitalName: "Chulalongkorn Hospital", imgSrc: "chula.jpg" },
    { hospitalName: "Rajavithi Hospital", imgSrc: "rajavithi.jpg" },
    { hospitalName: "Thammasat University Hospital", imgSrc: "thammasat.jpg" },
  ];

  console.log(ratings);

  return (
    <div className="flex flex-row gap-x-6 justify-center">
      {
        mockHospitalRepo.map((hospitalItem)=>(
          <Link href={`/hospital/${hospitalItem.hid}`}  className="w-1/5">
            <Card
            key={hospitalItem.name}
            hospitalName={hospitalItem.name}
            imgSrc={hospitalItem.image}
            rating={ratings.get(hospitalItem.name) ?? 0}
            onRatingChange={handleRatingChange}
            hid={hospitalItem.hid}
          />
          </Link>
          )
        )
      }
      {/* <div className="flex flex-row gap-x-6 justify-center">
        {hospitals.map(hospital => (
          <Card
            key={hospital.hospitalName}
            hospitalName={hospital.hospitalName}
            imgSrc={hospital.imgSrc}
            rating={ratings.get(hospital.hospitalName) ?? 0}
            onRatingChange={handleRatingChange}
          />
        ))}
      </div>
      <div className="text-black flex flex-col p-[20px]">
        {Array.from(ratings).map(([name, rating]) => (
            <button key={name} onClick={() => {
              console.log(name);
              handleRatingChange(name, null);
            }} data-testid={name}>{name} Rating: {rating}</button>
        ))}
        </div> */}
    </div>
  );
}
