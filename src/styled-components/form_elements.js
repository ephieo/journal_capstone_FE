import styled from "styled-components";

export const Form = styled.form`
  font-family: "Playfair Display";
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem;
  border: solid #003221 3px;
  background: transparent;
  border-radius: 30px;
  width: 25vw;
  padding: 1rem;
  color: #003221;
  @media screen and (max-width: 768px) {
    width: auto;
    font-size: 10px;
  }
`;

export const Label = styled.label`
  width: 70%;
  text-align: center;
`;

export const Input = styled.input`
  width: 70%;
  height: ${(props) => (props.height ? props.height : "7vh")};
  margin: 1rem;
  padding: 1rem;
  border: solid #003221 3px;
  border-radius: 30px;
  /* background: #dbeccd; */
`;

export const SubmitInput = styled.input`
  font-family: "Antic Didone", serif;
  width: 30%;
  height: 7vh;
  margin: 2rem;
  border: solid #003221 3px;
  border-radius: 30px;
  background: #003221;
  color: #eeeae4;
`;
