import React from "react"
import { injectGlobal } from 'styled-components'

import FinalScore from '../../containers/FinalScore'
import MatchesList from "../MatchesList"
import Stage from "../Stage"

injectGlobal`
    @font-face {
        font-family: 'Industry';
        src: url('./dist/public/fonts/industry-medium-webfont.woff2') format("woff2"),
             url('./dist/public/fonts/industry-medium-webfont.woff') format("font-woff");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Industry';
        src: url('./dist/public/fonts/industry-bold-webfont.woff2') format("woff2"),
             url('./dist/public/fonts/industry-bold-webfont.woff') format("font-woff");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }


    html {
        font-family: "Industry", Helvetica Neue, Helvetica, Arial, sans-serif;
        background-color: rgb(20, 10, 67);
        color: white;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
`;

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
        const stages = this.props.stages.filter(stage => stage.name !== "Présaison")
        const { activeStage } = this.state

        if (stages.length > 0 && !activeStage) {
            this.setState({activeStage: stages[0]})
        }
    }

    updateShownStage(activeStage) {
        return this.setState({activeStage})
    }

    render() {
        const { loadings } = this.props
        const { activeStage } = this.state
        const stages = this.props.stages.filter(stage => stage.name !== "Présaison")

        return (
            <div>
                {Object.keys(loadings).map(state =>
                    loadings[state] && <p key={`loading-${state}`}>loading {state}</p>
                )}

                <FinalScore/>

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