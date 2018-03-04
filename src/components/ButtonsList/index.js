import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.nav`
    display: flex;
    overflow-x: auto;
    margin-bottom: 1em;

    @media (min-width: 35rem) {
        justify-content: center;
    }
`

const ButtonsList = ({children, ...props}) => (
    <Wrapper {...props}>
        {children}
    </Wrapper>
)

export default ButtonsList