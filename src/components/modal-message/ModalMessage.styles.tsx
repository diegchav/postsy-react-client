import React from 'react'
import styled from 'styled-components'

import { FlashMessageType } from '../../providers/FlashMessage.provider'

interface ModalMessageContainerProps extends React.HTMLProps<HTMLDivElement> {
    modalType: FlashMessageType
}

const ModalMessageContainer = styled.div<ModalMessageContainerProps>`
    width: 20%;
    background-color: ${props => {
        switch (props.modalType) {
        case FlashMessageType.Success:
            return '#16a085'
        case FlashMessageType.Error:
            return '#c0392b'
        case FlashMessageType.Warning:
            return '#f39c12'
        default:
            return '#16a085'
        }
    }};
    padding: 1rem 0;
    text-align: center;
    margin: 0 auto;
    position: relative;
    top: 1rem;
    border: none;
    border-radius: 5px;
    color: #fff;

    .dismiss {
        position: absolute;
        top: .25rem;
        right: .25rem;
        cursor: pointer;
        padding: .25rem;
    }
`

export default ModalMessageContainer