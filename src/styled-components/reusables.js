import styled from "styled-components";

export const MainCont = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.flex_dir ? props.flex_dir : "column")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  align-items: ${(props) => (props.align_items ? props.align_items : "center")};
  /* border: black 3px solid; */
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
  -ms-overflow-x: auto;
  overflow-x: auto;
`;

export const Img = styled.img`
  height: ${(props) => (props.height ? props.height : "10vh")};
  width: ${(props) => (props.width ? props.width : "20vw")};
  margin: ${(props) => (props.margin ? props.margin : "1rem")};
  background: transparent;
`;

export const FooterCont = styled.div`
  bottom: 1rem;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
`;
export const NavCont = styled.div`
  top: 0;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 10vh;
`;

export const Logo = styled.h1`
  font-family: "Antic Didone", serif;
  margin-left: 2rem;
  color: #003221;

  @media (max-width: 968px) {
    font-size: 16px;
  }
`;
