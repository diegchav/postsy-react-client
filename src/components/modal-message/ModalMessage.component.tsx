import React, { useContext } from 'react'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles'

import { ErrorContext } from '../../providers/Error.provider'

import ModalMessageContainer from './ModalMessage.styles'

const CustomIconButton = withStyles({
    root: {
        color: '#fff'
    }
})(IconButton)

interface ModalMessageProps {
    error: string
}

export default ({ error }: ModalMessageProps) => {
    const { changeError } = useContext(ErrorContext)

    return (
        error !== ''
        ? <ModalMessageContainer>
            <CustomIconButton className="dismiss" onClick={() => changeError('')}>
                <CloseIcon style={{ fontSize: 15 }} />
            </CustomIconButton>
            {error}
        </ModalMessageContainer>
        : null
    )
}