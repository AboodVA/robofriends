import React from "react";

import "./Card.css";

const Card = ({ username, id, email }) => {
  return (
    <div className="bg-emerald-300 rounded- w-full p-2 text-center flex flex-col items-center hover:scale-105 transition-transform duration-75 ease-out ">
      <img
        className="w-3/4 mb-9"
        src={`https://robohash.org/${id}`}
        alt="photo"
      />

      <p className="text-4xl font-bold mb-4">{username} </p>
      <p className="text-3xl">{email}</p>
    </div>
  );
};

export default Card;
