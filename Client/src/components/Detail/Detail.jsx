import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Detail/Detail.css"

export default function Detail() {
  const params = useParams();
  const { id } = params;

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({})
  }, [id]);

  return (
    <div className="cuerpodelD">
      <div className="detail">
        <h2 className="NombreD">Name: {character.name}</h2>
        <h2 className="NombreS">Status: {character.status}</h2>
        <h2 className="NombreSP">Specie: {character.species}</h2>
        <h2 className="NombreG">Gender: {character.gender}</h2>
        <h2 className="NombreO">
          Origin: {character.origin?.name}
        </h2>
        <img className="imagendere" src={character.image} alt="" />
        <img className="Sello" src="/Recursos/intelligent-life-sticker-india-255x340-removebg-preview.png" />
      </div>
    </div>
  );
}