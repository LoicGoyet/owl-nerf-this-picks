import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.button`
    font-size: .875rem;
    background: rgb(255, 255, 255);
    border: 1px solid rgba(51,51,51,0.2);
    border-left: 0;
    padding: 0 .625rem;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 60px;
    white-space: nowrap;
    color: rgb(51, 51, 51);
    cursor: pointer;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;

    &:first-child {
        border-left: 1px solid rgba(51,51,51,.2);
    }

    &:hover {
        color: rgb(255, 137, 0);
    }

    &:focus {
        outline: none;
    }

    &:first-child {
        margin-left: 1rem;
    }

    &:last-child {
        margin-right: 1rem;
    }

    &::before {
        position: absolute;
        z-index: 1;
        content: '';
        left: -1px;
        right: -1px;
        bottom: -1px;
        height: 4px;
        opacity: ${props => props.active ? 1 : 0};
        background: rgb(255, 137, 0);
        transition: all 300ms cubic-bezier(.075,.82,.165,1);
    }
`

const Button = ({children, ...props}) => (
    <Wrapper {...props}>
        {children}
    </Wrapper>
)

export default Button