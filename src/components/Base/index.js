import React from "react"
import styled, { injectGlobal } from 'styled-components'

import FinalScore from '../../containers/FinalScore'
import BaseStyle from '../BaseStyle'
import MatchesList from "../MatchesList"
import Stage from "../Stage"
import Button from '../Button'
import ButtonsList from '../ButtonsList'
import Logo from '../Logo'
import ToggleSwitch from '../ToggleSwitch'
import Loader from '../Loader'

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
            <BaseStyle>
                <Logo/>

                {loadings.length > 0 && <Loader sections={loadings} fullPage/>}

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
            </BaseStyle>
        )
    }
}

export default Base