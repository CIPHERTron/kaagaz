import React from 'react';
import { Wrapper, ProfileImage, Tag, ProfileName } from '../styles/team.styles';

function TeamCard({ name, image, eb, por }) {
  return (
    <Wrapper>
      <ProfileImage src={image} width={180} height={180} alt='Profile Image' />
      <ProfileName>{name}</ProfileName>
      <Tag>{por}</Tag>
    </Wrapper>
  );
}

export default TeamCard;
