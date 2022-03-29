import styled from "styled-components";

export const PostToggle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "10vw"};
  height: 7vh;
  border: #b5c2be dashed 3px;
  border-radius: 20px;
  /* border: solid red 3px; */
`;

export const PostBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  height: 10vh;
  /* border: solid black 3px; */
`;

export const PostTitle = styled.h4`
  font-family: "Playfair Display", serif;
  color: #003221;
  margin: 0.3rem;
  @media (max-width: 968px) {
    font-size: 10px;
  }
`;
export const PostDate = styled.p`
  font-family: "Antic Didone", serif;
  font-size: 12px;
  min-width: 5.5rem;
  margin-left: 0.3rem;
  color: #003221;

  @media (max-width: 968px) {
    font-size: 10px;
  }
`;

export const ToggleBtn = styled.button`
  text-decoration: none;
  border: none;
  background: transparent;
`;
