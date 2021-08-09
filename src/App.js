import { useState } from 'react';

import styled from 'styled-components';
import HogwartsLight from './images/hogwarts-light.png';
import HogwartsDark from './images/hogwarts-dark.png';
import Moon from './images/moon.png';
import Sun from './images/sun.png';

function App() {

  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!isDarkMode);
    console.log(isDarkMode)
  }

  return (
    <Page light={isDarkMode ? true : false}>
      <Container>
        <Heading>
          <H1 light={isDarkMode ? true : false}>Dynamic Styling with Styled-Components</H1>
          <P light={isDarkMode ? true : false}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error natus at vitae sint qui sapiente impedit rerum commodi fugit ullam repudiandae itaque, saepe fuga facere temporibus excepturi dolore officia?</P>
          <Toggle light={isDarkMode ? true : false}  onClick={handleToggle}><ThemeImage src={ isDarkMode ? `${Sun}` : `${Moon}` }/></Toggle>
        </Heading>
      </Container>
    </Page>
  );
}

const ThemeImage = styled.img`
  max-width: 40px;
`;

const Toggle = styled.button`
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 2rem;
  cursor: pointer;
  transition: .2s all ease-in-out;
  background: none;
  color: ${props => !props.light ? "#eee" : "#333"};
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    transition: .2s all ease-in-out;
  }
`;

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  transition: .5s;
  background: ${props => props.light ? "#eee" : "#333"};
`;

const Container = styled.div`
  padding: 2rem;
`;

const Heading = styled.div`
  max-width: 960px;
  margin: auto;
  `;

const H1 = styled.h1`
  font-size: 3rem;
  color: ${props => !props.light ? "papayawhip" : "#000"};
  `;

const P = styled.p`
  font-size: 2rem;
  color: ${props => !props.light ? "#eee" : "#333"};
`;

export default App;
