import React from 'react'

import BasePageContainer from './Base.styles'

const BasePage: React.FunctionComponent = ({ children }) => (
    <BasePageContainer>
        {children}
    </BasePageContainer>
)

export default BasePage