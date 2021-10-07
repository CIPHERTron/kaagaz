import React from 'react';
import {
  Container,
  EditorComponent,
  Image,
  Heading,
  NamesContainer,
  Name,
  Description,
} from '../styles/editor.styles';

function EditorDesk() {
  return (
    <Container>
      <EditorComponent>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image src='/images/required/article1.jpg' />
        </div>
        <div>
          <Heading>Lorem ipsum Sit Dolor</Heading>
          <NamesContainer>
            <Name className='first'>John Doe</Name>
            <Name>John Doe</Name>
          </NamesContainer>
          <Description>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        </div>
      </EditorComponent>
      <EditorComponent>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image src='/images/required/article1.jpg' />
        </div>
        <div>
          <Heading>Lorem ipsum Sit Dolor</Heading>
          <NamesContainer>
            <Name className='first'>John Doe</Name>
            <Name>John Doe</Name>
          </NamesContainer>
          <Description>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        </div>
      </EditorComponent>
      <EditorComponent>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Image src='/images/required/article1.jpg' />
        </div>
        <div>
          <Heading>Lorem ipsum Sit Dolor</Heading>
          <NamesContainer>
            <Name className='first'>John Doe</Name>
            <Name>John Doe</Name>
          </NamesContainer>
          <Description>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
        </div>
      </EditorComponent>
    </Container>
  );
}

export default EditorDesk;
