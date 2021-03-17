import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div
      className=""
      style={{
        margin: "5px",
        width: "264px",
        height: "380px",
        backgroundColor: "#99e6ff",
      }}
    >
      <img
        alt="robots"
        srcset={`https://robohash.org/${id}?size=200x200 200w`}
        src={`https://robohash.org/${id}?size=200x200`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
