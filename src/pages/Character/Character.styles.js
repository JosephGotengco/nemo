import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 25px 50px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${(props) => props.theme.SCREEN_SIZES.NEST_HUB} {
    flex-direction: row-reverse;
  }
`;

export const Portrait = styled.img`
  width: 300px;
  min-height: 500px;
  object-fit: cover;

  background-color: ${(props) => props.theme.colors.background};
  margin-bottom: 1rem;

  @media ${(props) => props.theme.SCREEN_SIZES.NEST_HUB} {
    width: 200px;
    flex: 1;
  }
`;
