import styled from "styled-components";

export const MainCont = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flex_dir ? props.flex_dir : "column")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align_items ? props.align_items : "center")};
  border: black 3px solid;
  background: ${(props) =>
    props.back_color ? props.back_color : "transparent"};
  height: ${(props) => (props.height ? props.height : "100vh")};
  width: ${(props) => (props.width ? props.width : "100vw")};
`;

export const SubCont = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flex_dir ? props.flex_dir : "column")};
  flex-wrap: wrap;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align_items ? props.align_items : "center")};
  background: ${(props) => (props.back_color ? props.back_color : "#EEEAE4")};
  height: ${(props) => (props.height ? props.height : "")};
  width: ${(props) => (props.width ? props.width : "")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  border: ${(props) => (props.border ? props.border : "")};
  border-radius: 20px;
  overflow: ${(props) => (props.overflow ? props.overflow : "visible")};
`;

export const Img = styled.img`
  height: ${(props) => (props.height ? props.height : "10vh")};
  width: ${(props) => (props.width ? props.width : "20vw")};
  margin: ${(props) => (props.margin ? props.margin : "1rem")};
`;
