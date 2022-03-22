import styled from "styled-components";

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: black 3px solid;
  background: ${(props) =>
    props.back_color ? props.back_color : "transparent"};
  height: ${(props) => (props.height ? props.height : "100vh")};
  width: ${(props) => (props.width ? props.width : "100vw")};
`;

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.back_color || "blue"};
  height: ${(props) => props.height || "100vh"};
  width: ${(props) => props.width || "100vw"};
`;
