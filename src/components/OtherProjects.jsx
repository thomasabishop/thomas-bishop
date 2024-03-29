import React from 'react';
import styled from 'styled-components';
import {Container} from '../styles/Container';
import otherProjects from '../data/otherProjects';
const HeaderLink = styled.h4`
  cursor: pointer;
`;

export default function OtherProjects() {
  return (
    <Container>
      <h2>Other projects</h2>
      {otherProjects.map((data, index) => (
        <div key={index}>
          <HeaderLink>
            <a href={data.link} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </HeaderLink>
          <p>{data.description}</p>
        </div>
      ))}
    </Container>
  );
}
