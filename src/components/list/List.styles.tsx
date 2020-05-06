import styled from 'styled-components'

interface ListContainerProps {
    width: string,
    height?: string,
    titleSize?: string
}

const ListContainer = styled.div<ListContainerProps>`
    width: ${props => props.width};
    height: ${props => props.height};

    h1 {
        font-size: ${props => props.titleSize || '1.25rem'};
    }

    .list-content {
        display: flex;
        flex-direction: column;
        margin-top: .5rem;
    }
`

export default ListContainer