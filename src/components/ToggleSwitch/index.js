import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class ToggleSwitch extends React.Component {
    constructor(props) {
        super(props)
        this.toggleEnabled = this.toggleEnabled.bind(this)
    }

    static propTypes = {
        enabled: PropTypes.bool,
        onClick: PropTypes.func,
        labels: PropTypes.arrayOf(PropTypes.string),
    }

    static defaultProps = {
        enabled: true,
        onClick: () => true,
        labels: ['hello', 'world']
    }

    state = {
        enabled: this.props.enabled,
    }

    toggleEnabled() {
        const enabled = !this.state.enabled
        this.setState({enabled})
        return this.props.onClick()
    }

    render() {
        return (
            <Wrapper onClick={this.toggleEnabled}>
                <Label
                    active={!this.state.enabled}
                    align="right"
                >
                    {this.props.labels[0]}
                </Label>

                <FakeInput enabled={this.state.enabled}/>

                <Label
                    active={this.state.enabled}
                    align="left"
                >
                    {this.props.labels[1]}
                </Label>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 1rem;
    max-width: 100%;
`

const Label = styled.label`
    font-size: .875rem;
    line-height: 1;
    font-weight: 700;
    display: block;
    text-transform: uppercase;
    text-align: center;
    transition: all 300ms;
    flex-grow: 1;
    color: ${props => props.active ? `rgb(255, 137, 0)` : `inherit`};
    text-align: ${props => props.align};
    max-width: calc(100vw - 24.5px);
    cursor: pointer;
    user-select: none;
`

const FakeInput = styled.div`
    display: inline-block;
    height: 27px;
    position: relative;
    width: 55px;
    border-radius: 25px;
    border: 1px solid rgba(51, 51, 51, 0.4);
    background-color: rgb(255, 255, 255);
    flex: 0 1 auto;
    margin: 0 12px;
    flex-shrink: 0;

    &::before {
        content: '';
        position: absolute;
        width: 27px;
        height: calc(100% + 2px);
        margin-top: -1px;
        border-radius: 50%;
        box-shadow: 0 0 14px 0 rgba(0,0,0,.11);
        transition: transform 400ms cubic-bezier(.19,1,.22,1);
        border: 1px solid rgba(51, 51, 51, 0.4);
        transform: ${props => props.enabled ? `translateX(28px)` : `translateX(-1px)`};
    }
`