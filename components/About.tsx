import React from 'react';
import { Wrapper, LeftImage, Text } from '../styles/about.styles';

import { aboutContent, instaAccountLink, instaAccountName } from '../config/teams';
import { Link } from '@material-ui/core';

function about() {
  return (
    <>
      <Wrapper>
        <LeftImage src='/images/required/about.png' alt='About Illustration' />
        {aboutContent.split('\n').map((data, index) => {
          if (data.indexOf('@d361official') < 0) {
            return <Text key={index}>{data}</Text>;
          } else {
            return (
              <Text key={index}>
                {data.substr(0, data.indexOf(`@d361official`))}
                <Link href={`${instaAccountLink}`}>
                  <span>{instaAccountName}</span>
                </Link>
                {data.substr(data.indexOf(' where'))}
              </Text>
            );
          }
        })}
      </Wrapper>
    </>
  );
}

export default about;
