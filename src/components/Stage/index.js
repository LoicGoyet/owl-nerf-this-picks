import React from "react";
import styled from 'styled-components';

import MatchesList from '../MatchesList'
import Button from '../Button'
import ButtonsList from '../ButtonsList'

class Stage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeWeek: null
        }
    }

    componentWillReceiveProps(nextProps) {
        const { weeks } = nextProps.stage
        const { activeWeek } = this.state

        const isActiveWeekInWeeks = weeks.find(week => {
            return week === activeWeek;
        })

        if (weeks.length > 0 && (!activeWeek || !isActiveWeekInWeeks)) {
            return this.setState({activeWeek: weeks[0]})
        }
    }

    updateShownWeek(activeWeek) {
        return this.setState({activeWeek})
    }

    render() {
        const { name, weeks } = this.props.stage
        const { activeWeek } = this.state

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
                    <MatchesList matches={activeWeek.matches}/>
                )}
            </section>
        )
    }
}

export default Stage