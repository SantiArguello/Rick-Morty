import styled from "styled-components";

const Carta = styled.div`
  display: inline-block;
  background-image: linear-gradient(
    to left,
    #6200ff86,
    #7c68ee8a,
    #3498db89,
    #2ecc7079,
    #00dbeb88
  );
  margin: 10px;
  padding: 1rem;
  border-radius: 20px;
`;
const Img = styled.img`
  border-radius: 20px;
`;
const Button = styled.button`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  -webkit-box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 18px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  :active {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
`;

export default function Card(props) {
  return (
    <Carta>
      <Button onClick={props.onClose}>X</Button>
      <h2>{props.name}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <Img src={props.image} alt={props.name} />
    </Carta>
  );
}
