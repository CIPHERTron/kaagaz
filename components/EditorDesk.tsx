import React from 'react';
import { Container } from '../styles/editor.styles';
import EditorDeskCard from './EditorDeskCard';

import { editorsDesk } from '../config/index.json';

function EditorDesk() {
  return (
    <Container>
      {editorsDesk.map(({ image, alt, link, title, content, credit1, credit2 }) => (
        <EditorDeskCard
          image={image}
          alt={alt}
          link={link}
          title={title}
          content={content}
          credit1={credit1}
          credit2={credit2}
        />
      ))}
    </Container>
  );
}

export default EditorDesk;
