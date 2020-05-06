import React from 'react'

import ListContainer from './List.styles'

interface ListProps {
    width: string,
    height?: string,
    title?: string,
    titleSize?: string,
    items: any[],
    itemKey: string,
    ItemComponent: any,
    NoItemsComponent: any
}

const List = ({ width, height, title, titleSize, items, itemKey, ItemComponent, NoItemsComponent }: ListProps) => (
    <ListContainer width={width} height={height} titleSize={titleSize}>
        {title && <h1>{title}</h1>}
        <div className="list-content">
            {items.length > 0
                ? items.map((item) => <ItemComponent key={item[itemKey]} item={item} />)
                : <NoItemsComponent />
            }
        </div>
    </ListContainer>
)

export default List