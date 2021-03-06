import React from 'react'

import getImageNameFromUrl from '../../helpers/get-image-name-from-url.helper'

import UserPostItemContainer from './UserPostItem.styles'

interface UserPostItemProps {
    item: any
}

const UserPostItem = ({ item }: UserPostItemProps) => {
    const imageName = getImageNameFromUrl(item.imageUrl)

    return (
        <UserPostItemContainer>
            <div className="user-details">
                <img className="avatar" src={item.user.avatar} alt="avatar" />
                <div className="user">
                    <p className="author">{item.user.name}</p>
                    <p className="timestamp">{item.fromNow}</p>
                </div>
            </div>
            <p className="post-text">{item.text}</p>
            {imageName && <img className="post-image" src={item.imageUrl} alt={imageName} />}
        </UserPostItemContainer>
    )
}

export default UserPostItem