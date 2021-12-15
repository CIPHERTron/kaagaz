import React, { useState } from 'react';
import { Layout, Container, ProfileCard } from '../components';
import { TeamContainer, Heading, ButtonContainer, Button } from '../styles/team.styles';
import { nineteen, twenty, twentyone } from '../config/teams';

const Teams = () => {
  const [selected, setSelected] = useState(twentyone);
  const eb = selected.filter((member) => member.eb);
  const team = selected.filter((member) => !member.eb);

  const handleNineteen = (e) => {
    e.preventDefault();
    setSelected(nineteen);
  };

  const handleTwenty = (e) => {
    e.preventDefault();
    setSelected(twenty);
  };

  const handleTwentyOne = (e) => {
    e.preventDefault();
    setSelected(twentyone);
  };

  return (
    <Layout pathname={'/team'} pageTitle='The Team' pageDescription='Kaagaz Team'>
      <Container>
        <ButtonContainer>
          <Button onClick={handleTwentyOne}>2021-22</Button>
          <Button onClick={handleTwenty}>2020-21</Button>
          <Button onClick={handleNineteen}>2019-20</Button>
        </ButtonContainer>
        <Heading>Core Team</Heading>
        <TeamContainer>
          {eb.map(({ name, image, eb, por }, idx) => (
            <ProfileCard key={idx} name={name} image={image} eb={eb} por={por} />
          ))}
        </TeamContainer>

        <Heading>Members</Heading>
        <TeamContainer>
          {team.map(({ name, image, eb, por }, idx) => (
            <ProfileCard key={idx} name={name} image={image} eb={eb} por={por} />
          ))}
        </TeamContainer>
      </Container>
    </Layout>
  );
};

export default Teams;
