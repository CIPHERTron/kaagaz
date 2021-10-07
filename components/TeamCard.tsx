import React from 'react';
import { Wrapper, ProfileImage, Tag } from '../styles/team.styles';

function TeamCard({ name, image, eb, por }) {
  return (
    <Wrapper>
      <ProfileImage src={`/images/${image}`} width={180} height={180} alt='Profile Image' />
      <h4>{name}</h4>
      {eb && <Tag>{por}</Tag>}
    </Wrapper>
  );
}

export default TeamCard;
