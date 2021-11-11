import React from 'react';
import { Container } from '../styles/editor.styles';
import EditorDeskCard from './EditorDeskCard';

function EditorDesk() {
  return (
    <Container>
      <EditorDeskCard />
      <EditorDeskCard />
      <EditorDeskCard />
      <EditorDeskCard />
    </Container>
  );
}

export default EditorDesk;
