import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'


import { animations } from '../../utils/style'

class Loader extends React.Component {
    static propTypes = {
        sections: PropTypes.arrayOf(PropTypes.string),
        fullPage: PropTypes.bool,
    }

    static defaultProps = {
        sections: [],
        fullPage: false,
    }

    state = {
        count: 0
    }

    componentWillMount() {
        this.interval = setInterval(() => this.setState({count: ++this.state.count}), 500)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }


    renderDots() {
        let str = ''
        for (let i = 0; i <= (this.state.count % 3); i++) {
            str += '.'
        }

        return (
            <Dots>{str}</Dots>
        )
    }

    render() {
        const {sections, fullPage} = this.props

        return (
            <Wrapper fullPage={fullPage}>
                <Spinner/>
                <Label>
                    Loading {sections.join(', ')}{this.renderDots()}
                </Label>
            </Wrapper>
        )
    }
}

const Wrapper = styled.section`
    background-color: rgb(20, 10, 67);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${props => props.fullPage && `
        position: fixed;
        top: 0;
        left: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 100000;
    `}
`

const Spinner = styled.div`
    margin-left: auto;
    margin-right: auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: .6em solid rgba(255,255,255,.2);
    border-right: .6em solid rgba(255,255,255,.2);
    border-bottom: .6em solid rgba(255,255,255,.2);
    border-left: .6em solid rgb(255, 255, 255);
    transform: translateZ(0);
    animation: ${animations.spinner} .8s infinite linear;
    border-radius: 50%;
    width: 6em;
    height: 6em;
    z-index: 1000;
    margin-bottom: 1em;
`

const Label = styled.h3`
    margin: 0;
`

const Dots = styled.span`
    display: inline-block;
    width: 14px;
`


export default Loader