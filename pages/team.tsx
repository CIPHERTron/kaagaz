import React, { useState } from 'react';
import { Layout, Container, ProfileCard } from '../components';
import { TeamContainer, Heading, ButtonContainer, Button } from '../styles/team.styles';
import { eighteen, nineteen } from '../config/teams';

const Teams = () => {
  const [selected, setSelected] = useState(eighteen);
  const eb = selected.filter((member) => member.eb);
  const team = selected.filter((member) => !member.eb);

  const handleClick = (e) => {
    e.preventDefault();
    setSelected(eighteen);
  };
  const handleNineteen = (e) => {
    e.preventDefault();
    setSelected(nineteen);
  };

  return (
    <Layout pathname={'/team'} pageTitle='The Team' pageDescription='Kaagaz Team'>
      <Container>
        <ButtonContainer>
          <Button onClick={handleClick}>2018-19</Button>
          <Button onClick={handleNineteen}>2019-20</Button>
          <Button>2020-21</Button>
          <Button>2020-21</Button>
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
