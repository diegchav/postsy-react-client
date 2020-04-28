import React, { createContext, useState, ComponentProps } from 'react'

export enum FlashMessageType {
    Success,
    Error,
    Warning
}

export const FlashMessageContext = createContext({
    message: '',
    type: FlashMessageType.Success,
    changeFlashMessage: (message: string, type: FlashMessageType = FlashMessageType.Success) => {}
})

const FlashMessageProvider = ({ children }: ComponentProps<any>) => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState(FlashMessageType.Success)
    const changeFlashMessage = (message: string, type: FlashMessageType = FlashMessageType.Success) => {
        setMessage(message)
        setType(type)
    }

    return (
        <FlashMessageContext.Provider value={{
            message,
            type,
            changeFlashMessage
        }}>
            {children}
        </FlashMessageContext.Provider>
    )
}

export default FlashMessageProvider