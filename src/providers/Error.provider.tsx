import React, { createContext, useState, ComponentProps } from 'react'

export const ErrorContext = createContext({
    error: '',
    changeError: (_: any) => {}
})

const ErrorProvider = ({ children }: ComponentProps<any>) => {
    const [error, setError] = useState('')
    const changeError = (error: string) => setError(error)

    return (
        <ErrorContext.Provider value={{
            error,
            changeError
        }}>
            {children}
        </ErrorContext.Provider>
    )
}

export default ErrorProvider