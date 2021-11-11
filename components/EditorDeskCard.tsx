import React from 'react';
import { EditorComponent, Image, NamesContainer, Name, Description } from '../styles/editor.styles';
import { Body, Heading2, Heading4 } from '../styles/Typography.styles';

const EditorDeskCard = () => {
  return (
    <EditorComponent>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src='/images/required/article1.jpg' />
      </div>
      <div style={{ margin: '10px 0' }}>
        <Heading2>Lorem ipsum Sit Dolor</Heading2>
        <NamesContainer>
          <Name className='first'>
            <Heading4>John Doe </Heading4>
          </Name>
          <Name>
            <Heading4>John Doe</Heading4>
          </Name>
        </NamesContainer>
        <Description>
          <Body>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Body>
        </Description>
      </div>
    </EditorComponent>
  );
};

export default EditorDeskCard;
