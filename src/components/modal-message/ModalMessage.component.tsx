import React, { useContext } from 'react'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles'

import { FlashMessageType, FlashMessageContext } from '../../providers/FlashMessage.provider'

import ModalMessageContainer from './ModalMessage.styles'

const CustomIconButton = withStyles({
    root: {
        color: '#fff'
    }
})(IconButton)

interface ModalMessageProps {
    message: string,
    type?: FlashMessageType
}

export default ({ message, type = FlashMessageType.Success }: ModalMessageProps) => {
    const { changeFlashMessage } = useContext(FlashMessageContext)
    return (
        message !== ''
        ? <ModalMessageContainer modalType={type}>
            <CustomIconButton className="dismiss" onClick={() => changeFlashMessage('')}>
                <CloseIcon style={{ fontSize: 15 }} />
            </CustomIconButton>
            {message}
        </ModalMessageContainer>
        : null
    )
}