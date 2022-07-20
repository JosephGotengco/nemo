import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledTab = styled.div`
  margin: 0 1rem;
  position: relative;
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: 5%;
  color: #c9cfd7;

  &:hover {
    color: #2f3542;
  }

  ${({ isActive }) =>
    isActive &&
    `
  color: #2F3542;

  &::before {
    content: "";
    width: 110%;
    left: -5%;
    height: 2px;
    background-color: #5352ed;
    position: absolute;
    bottom: -20%;
  }
  `}
`;

const SeperatorDot = styled.div`
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #d9d9d9;
`;

export const TabHeaders = ({ activeTab, tabs }) => {
  const isNotLastTab = (index) => index !== tabs.length - 1;
  return (
    <HeaderWrapper>
      {tabs.map(({ label, onClick }, index) => (
        <React.Fragment key={`${label}__TAB`}>
          <StyledTab isActive={label === activeTab} onClick={onClick}>
            {label}
          </StyledTab>
          {isNotLastTab(index) ? <SeperatorDot /> : null}
        </React.Fragment>
      ))}
    </HeaderWrapper>
  );
};
