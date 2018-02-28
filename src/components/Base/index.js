import React from "react"
import GameList from "../GameList"
import Stage from "../Stage"

class Base extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeStage: null
        }
    }

    componentDidMount() {
        this.props.fetchPicks()
        this.props.fetchSchedule()
        this.props.fetchTeams()
    }

    componentDidUpdate() {
        const { stages } = this.props
        const { activeStage } = this.state

        if (stages.length > 0 && !activeStage) {
            this.setState({activeStage: stages[0]})
        }
    }

    updateShownStage(activeStage) {
        return this.setState({activeStage})
    }

    render() {
        const { stages } = this.props
        const { activeStage } = this.state

        return (
            <div>
                {stages.length > 0 && (
                    <div>
                        <div>
                            {stages.map(stage => (
                                <button key={stage.id} onClick={e => this.updateShownStage(stage)}>
                                    {stage.name}
                                </button>
                            ))}
                        </div>

                        {activeStage != null && <Stage stage={activeStage}/>}
                    </div>
                )}
            </div>
        )
    }
}

export default Base