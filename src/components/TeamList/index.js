import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TeamLogo from '../TeamLogo';

const TeamList = props => {
  return (
    <Wrapper>
      <Row>
        {props.teams.map(team => {
          const theme = props.activeTeams.find(item => item === team.id)
            ? 'white'
            : 'disabled';
          return (
            <Item
              key={`teamlist-${team.id}`}
              onClick={() => props.onItemClick(team.id)}
            >
              <TeamLogo theme={theme} team={team.id} width={40} height={40} />
            </Item>
          );
        })}
      </Row>
    </Wrapper>
  );
};

TeamList.defaultProps = {
  teams: void 0,
  activeTeams: [],
  onItemClick: void 0,
};

TeamList.propTypes = {
  teams: PropTypes.array.isRequired,
  activeTeams: PropTypes.array,
  onItemClick: PropTypes.func,
};

const gutter = 0.75; // rem

const Wrapper = styled.nav`
  padding: ${gutter}rem ${gutter}rem 0 ${gutter}rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: -${gutter / 2}rem;
  margin-right: -${gutter / 2}rem;
`;

const Item = styled.button`
  padding-left: ${gutter / 2}rem;
  padding-right: ${gutter / 2}rem;
  margin-bottom: ${gutter}rem;
  cursor: pointer;
  border: 0;
  background: 0;

  &:focus {
    outline: 0;
  }
`;

const Logo = styled.img``;

export default TeamList;
