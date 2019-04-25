import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { rgba } from "polished";

const SectionContainer = styled.section`
  width: 100%;
  height: 40rem;
  ${({ theme }) => theme.laptop`
   height: 30rem;
  `}
  background-color: ${props => props.theme.white}
  display: flex;
  flex-direction: row;
  ${({ theme }) => theme.tablet`
  background: linear-gradient(
    ${props => rgba(props.theme.white, 0.5)},
    ${props => rgba(props.theme.white, 0.5)}),
    url(${props => props.image});
    background-size: cover;
  background-blend-mode: normal;
  background-position: center;`}
 
`;

const SectionText = styled.div`
  width: 50%;
  height: 100%;
  padding: 0 8rem;
  display: flex;
  ${({ theme }) => theme.tablet`
  width:100%;
 `}
  ${({ theme }) => theme.phone`
  padding: 0 5rem;
`}

  flex-direction: column;
  justify-content: center;
  ${props =>
    props.opposite &&
    `align-items: flex-end;
  text-align: right;`}
`;
const TitleText = styled.div`
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 4rem;
  text-transform: uppercase;
  ${({ theme }) => theme.laptop`
  font-size: 2.5rem;
  line-height: 2.5rem;
  
  `}
`;
const Separator = styled.div`
  width: 12rem;
  height: 0.7rem;
  background-color: ${props => props.theme.lightpurple};
  border: none;
  margin: 1rem 0;
`;
const DescriptionText = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  ${({ theme }) => theme.tablet`
  font-size: 1.3rem;
  background-color: ${props => rgba(props.theme.white, 0.6)}};
  `}
`;
const SectionImage = styled.div`
  width: 50%;
  height: 100%;
  ${({ theme }) => theme.tablet`
   display: none;
  `}

  ${props =>
    props.opposite
      ? `background: linear-gradient(
    to left,
    ${rgba(props.theme.lightpurple, 0.8)},
    rgba(0, 0, 0, 0)
  ),
  url(${props.image});`
      : `background: linear-gradient(
    to right,
    ${rgba(props.theme.lightpurple, 0.8)},
    rgba(0, 0, 0, 0)
  ),
  url(${props.image});`}
  background-size: cover;
  background-blend-mode: normal;
  background-position: center;
`;
const InfoSection = props => {
  return (
    <SectionContainer image={props.image}>
      {!props.opposite && (
        <SectionImage opposite={props.opposite} image={props.image} />
      )}
      <SectionText opposite={props.opposite}>
        <TitleText>{props.title}</TitleText>
        <Separator />
        <DescriptionText>{props.desc}</DescriptionText>
      </SectionText>
      {props.opposite && (
        <SectionImage opposite={props.opposite} image={props.image} />
      )}
    </SectionContainer>
  );
};

InfoSection.propTypes = {
  title: PropTypes.string.isRequired
};

export default InfoSection;
