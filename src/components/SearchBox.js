import React, { useState } from "react";

const SearchBox = ({ onChange, value }) => {
  return (
    <div className="text-center mb-32">
      <input
        className="inline-block text-2xl py-2 px-4 bg-teal-200"
        type="text"
        placeholder="search robots"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
