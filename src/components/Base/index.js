import React from "react"
import styled, { injectGlobal } from 'styled-components'

import FinalScore from '../../containers/FinalScore'
import MatchesList from "../MatchesList"
import Stage from "../Stage"
import Button from '../Button'
import ButtonsList from '../ButtonsList'
import Logo from '../Logo'
import ToggleSwitch from '../ToggleSwitch'

import industryMediumWoff from "../../../assets/fonts/industry-medium-webfont.woff"
import industryMediumWoff2 from "../../../assets/fonts/industry-medium-webfont.woff2"
import industryBoldWoff from "../../../assets/fonts/industry-bold-webfont.woff"
import industryBoldWoff2 from "../../../assets/fonts/industry-bold-webfont.woff2"


injectGlobal`
    @font-face {
        font-family: 'Industry';
        src: url('${industryMediumWoff2}') format("woff2"),
             url('${industryMediumWoff}') format("font-woff");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Industry';
        src: url('${industryBoldWoff2}') format("woff2"),
             url('${industryBoldWoff}') format("font-woff");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }


    html {
        font-family: "Industry", Helvetica Neue, Helvetica, Arial, sans-serif;
        background-color: rgb(20, 10, 67);
        color: white;
    }

    body {
        margin: 0;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
`;

const LoadingMessage = styled.p`
    text-align: center;

    & a {
        color: red;
    }
`

const Signature = styled.p`
    text-align: center;
    font-weight: bold;
    font-size: 0.75rem;
    margin: 3rem auto 1rem;
    text-transform: uppercase;
`

const SignatureLink = styled.a`
    color: rgb(236, 9, 114);
    display: inline-block;
    position: relative;
    text-decoration: none;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

const ScoreVisibilityToggle = styled.nav`
    text-align: center;
    margin: 2rem auto;
`

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
        const stages = this.props.stages.filter(stage => stage.name != "Présaison")
        const { activeStage } = this.state

        if (stages.length > 0 && !activeStage) {
            this.setState({activeStage: stages[0]})
        }
    }

    updateShownStage(activeStage) {
        return this.setState({activeStage})
    }

    render() {
        const { loadings, toggleScoreVisibility, hideScores } = this.props
        const { activeStage } = this.state
        const stages = this.props.stages.filter(stage => stage.name !== "Présaison")

        return (
            <main>
                <Logo/>

                {Object.keys(loadings).map(state =>
                    loadings[state] && <LoadingMessage key={`loading-${state}`}>loading {state}...</LoadingMessage>
                )}

                <FinalScore/>

                <ScoreVisibilityToggle>
                    <ToggleSwitch
                        enabled={hideScores}
                        onClick={toggleScoreVisibility}
                        labels={['montrer les scores', 'no spoilers']}
                    />
                </ScoreVisibilityToggle>

                {stages.length > 0 && (
                    <div>
                        <ButtonsList>
                            {stages.map(stage => (
                                <Button
                                    key={stage.id}
                                    onClick={e => this.updateShownStage(stage)}
                                    active={activeStage === stage}
                                >
                                    {stage.name}
                                </Button>
                            ))}
                        </ButtonsList>

                        {activeStage != null && <Stage stage={activeStage}/>}
                    </div>
                )}

                <Signature>Made with love by <SignatureLink href="https://github.com/LoicGoyet" target="_blank">Loïc Goyet</SignatureLink></Signature>
            </main>
        )
    }
}

export default Base