import React, { ComponentType } from 'react'
import CirculaProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

interface SpinnerProps {
    isLoading: boolean
}

const CustomCirculaProgress = withStyles({
    root: {
        color: '#95a5a6',
        margin: 'auto'
    }
})(CirculaProgress)

const withSpinner = <T extends object>(WrappedComponent: ComponentType<T>): React.FC<T & SpinnerProps> => {
    const Spinner = ({ isLoading, ...otherProps }: SpinnerProps) => {
        return isLoading
            ? <CustomCirculaProgress />
            : <WrappedComponent {...otherProps as T} />
    }

    return Spinner
}

export default withSpinner