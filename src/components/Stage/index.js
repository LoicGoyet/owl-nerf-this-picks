import React from "react";

import MatchesList from '../MatchesList'

class Stage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeWeek: null
        }
    }

    componentWillUpdate(nextProps) {
        const { weeks } = nextProps.stage
        const { activeWeek } = this.state

        if (weeks.length > 0 && !activeWeek) {
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
                <h2>{name}</h2>

                {weeks.length > 0 && weeks.map(week => (
                    <button key={week.id} onClick={e => this.updateShownWeek(week)}>
                        {week.name}
                    </button>
                ))}

                {activeWeek != null && (
                    <div>
                        <h3>{activeWeek.name}</h3>
                        <MatchesList matches={activeWeek.matches}/>
                    </div>
                )}
            </section>
        )
    }
}

export default Stage