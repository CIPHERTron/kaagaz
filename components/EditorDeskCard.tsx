import React from 'react';
import Link from 'next/link';
import { EditorComponent, Image, NamesContainer, Name, Description } from '../styles/editor.styles';
import { Body, Heading2, Heading4 } from '../styles/Typography.styles';

const EditorDeskCard = ({ image, alt, link, title, content, credit1, credit2 }) => {
  return (
    <EditorComponent>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={image} alt={alt} />
      </div>
      <div style={{ margin: '10px 0' }}>
        <Link href={link}>
          <Heading2>{title}</Heading2>
        </Link>
        <NamesContainer>
          <Heading4 className='first'>{credit1}</Heading4>
          <Heading4>{credit2}</Heading4>
        </NamesContainer>
        <Description>
          <Body>{content}</Body>
        </Description>
      </div>
    </EditorComponent>
  );
};

export default EditorDeskCard;
