import styled from "styled-components";

const Input = styled.input`
    min-height: 50px;
  max-width: 350px;
  padding: 0 1rem;
  color: #fff;
  font-size: 15px;
  border: 1px solid #5e4dcd;
  border-radius: 6px 0 0 6px;
  background-color: #0000009e;
`
const Button = styled.button`
   min-height: 50px;
  padding: .5em 1em;
  border: none;
  border-radius: 0 6px 6px 0;
  background-color: #5e4dcdca;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: background-color .3s ease-in-out;




`


export default function SearchBar(props) {
   return (
      <div>
         <Input type='search' />
      <Button onClick={ props.onSearch }>Agregar</Button>
      </div>
   );
}
