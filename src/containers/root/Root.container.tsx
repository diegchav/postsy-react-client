import React from 'react'

import RootStyledContainer from './Root.styles'

const RootContainer: React.FunctionComponent = ({ children }) => (
    <RootStyledContainer>
        {children}
    </RootStyledContainer>
)

export default RootContainer