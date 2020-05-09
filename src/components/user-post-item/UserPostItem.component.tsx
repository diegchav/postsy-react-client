import React from 'react'

import UserPostItemContainer from './UserPostItem.styles'

interface UserPostItemProps {
    item: any
}

const UserPostItem = ({ item }: UserPostItemProps) => {
    const imageNameIndex = item.imageUrl.split('/') + 1
    const imageName = item.imageUrl.substr(imageNameIndex)

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