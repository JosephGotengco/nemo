import styled from "styled-components";

export const Wrapper = styled.section`
padding: 0 1rem;

opacity: 1;
transition: all 0.35s;
`;

export const Title = styled.p`
font-size: 1.5rem;
line-height: 1.5rem;
font-weight: 300;
letter-spacing: 5%;
color: #2f3542;
margin: 2rem 0;
position: relative;

&::before {
  content: "";
  position: absolute;
  width: 10%;
  height: 2px;
  background-color: rgba(47, 53, 66, 0.1);
  top: -10px;
  left: 0;
}

&::after {
  content: "";
  position: absolute;
  width: 65%;
  height: 2px;
  background-color: rgba(47, 53, 66, 0.1);
  bottom: -10px;
  left: 0;
}
`;

export const Description = styled.p`
font-size: 0.75rem;
font-weight: 400;
line-height: 2rem;
color: #2f3542;
letter-spacing: 5%;
`;

export const RelationshipThumbnail = styled.img``;