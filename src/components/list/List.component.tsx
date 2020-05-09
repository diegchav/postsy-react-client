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
    NoItemsComponent?: any,
    [p: string]: any  // Any other prop that we need to pass to ItemComponent
}

const List = ({ width, height, title, titleSize, items, itemKey, ItemComponent, NoItemsComponent, ...otherProps }: ListProps) => (
    <ListContainer width={width} height={height} titleSize={titleSize}>
        {NoItemsComponent
            ? (
                <>
                {title && <h1>{title}</h1>}
                <NoItemsComponent />
                </>
            )
            : (
                <>
                {(title && items.length > 0) && <h1>{title}</h1>}
                <div className="list-content">
                    {items.map((item) => <ItemComponent key={item[itemKey]} item={item} {...otherProps} />)}
                </div>
                </>
            )
        }
    </ListContainer>
)

export default List