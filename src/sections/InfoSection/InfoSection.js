import styled from "styled-components";
// import { useTabs } from "../../hooks/useTabs/useTabs";
// import { TabHeaders } from "../../components/TabHeaders";
import { Profile } from "../../components/Profile";
// import { en as InfoSectionEn } from "./InfoSection.en";
import { en } from "../../resources/en";
import { CharacterContext } from "../../contexts/CharacterContext/CharacterContext";

const Wrapper = styled.section`
  @media ${(props) => props.theme.SCREEN_SIZES.NEST_HUB} {
    flex: 2;
  }
`;

const TabWrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TabContainer = styled.div`
  max-width: 500px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: "Playfair Display SC", serif;
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 25px;
  word-spacing: 9999px;

  @media ${(props) => props.theme.SCREEN_SIZES.NEST_HUB} {
    font-size: 8rem;
    line-height: 8rem;
  }
`;

// const TAB_LABELS = [
//   InfoSectionEn.profile,
//   InfoSectionEn.relationships,
//   InfoSectionEn.pictures,
// ];

export const InfoSection = () => {
  // const { activeTab, tabs } = useTabs(TAB_LABELS);

  return (
    <CharacterContext.Consumer>
      {({ character }) => (
        <Wrapper>
          <Title>{en[character].title}</Title>
          <TabWrapper>
            <TabContainer>
              {/* TODO: Add back tab headers */}
              {/* <TabHeaders activeTab={activeTab} tabs={tabs} />
              {activeTab === InfoSectionEn.profile && (
                <Profile {...en[character].profile} />
              )} */}
              <Profile {...en[character].profile} />
            </TabContainer>
          </TabWrapper>
        </Wrapper>
      )}
    </CharacterContext.Consumer>
  );
};
