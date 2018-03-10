import React from 'react';
import styled from 'styled-components';

import WeekMatches from '../../containers/WeekMatches';
import TeamFilter from '../../containers/TeamFilter';
import Button from '../Button';
import ButtonsList from '../ButtonsList';

class Stage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeWeek: null,
    };
  }

  componentDidMount() {
    const {weeks} = this.props.stage;

    if (weeks.length > 0) {
      return this.setState({activeWeek: weeks[0]});
    }
  }

  componentWillReceiveProps(nextProps) {
    const {weeks} = nextProps.stage;
    const {activeWeek} = this.state;

    const isActiveWeekInWeeks = weeks.find(week => {
      return week === activeWeek;
    });

    if (weeks.length > 0 && (!activeWeek || !isActiveWeekInWeeks)) {
      return this.setState({activeWeek: weeks[0]});
    }
  }

  updateShownWeek(activeWeek) {
    return this.setState({activeWeek});
  }

  render() {
    const {name, weeks} = this.props.stage;
    const {activeWeek} = this.state;

    return (
      <section>
        {weeks.length > 0 && (
          <ButtonsList>
            {weeks.map(week => (
              <Button
                key={week.id}
                onClick={e => this.updateShownWeek(week)}
                active={week === activeWeek}
              >
                {week.name}
              </Button>
            ))}
          </ButtonsList>
        )}

        {activeWeek != null && (
          <React.Fragment>
            <TeamFilter />
            <WeekMatches matches={activeWeek.matches} />
          </React.Fragment>
        )}
      </section>
    );
  }
}

export default Stage;
