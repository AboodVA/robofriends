import React from "react";
import Card from "./Card";
import ErrorBoundary from "./ErrorBoundary";

const CardList = ({ cards }) => {
  try {
    return (
      <div className="grid gap-y-32 gap-x-24 px-10 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {cards.map(({ id, name, email }) => {
          return <Card key={id} id={id} username={name} email={email} />;
        })}
      </div>
    );
  } catch (error) {
    return <ErrorBoundary error={error.message} />;
  }
};

export default CardList;
