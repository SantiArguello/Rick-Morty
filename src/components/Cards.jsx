import React from "react";
import Card from "./Card";


export default function Cards(props) {
  const { characters, onClose } = props;

 

  return (
    <div>
      {characters.map((e) => (
        <Card
          name={e.name}
          id={e.id}
          species={e.species}
          gender={e.gender}
          image={e.image}
          key={e.id}
          onClose={onClose}
          
        />
      ))}
    </div>
  );
}
