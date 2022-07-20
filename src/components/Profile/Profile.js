import { Description, Title, Wrapper } from "./Profile.styles";

export const Profile = ({ title, description }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
);
