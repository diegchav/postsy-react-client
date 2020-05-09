import React from 'react'

import PostItemContainer from './PostItem.styles'

interface PostItemProps {
    item: any,
    onDelete: Function
}

const PostItem = ({ item, onDelete }: PostItemProps) => {
    const imageNameIndex = item.imageUrl.split('/') + 1
    const imageName = item.imageUrl.substr(imageNameIndex)

    const handleDelete = () => {
        const { _id } = item
        onDelete(_id)
    }

    return (
        <PostItemContainer>
            <div className="user-details">
                <img className="avatar" src={item.user.avatar} alt="avatar" />
                <div className="user">
                    <p className="author">{item.user.name}</p>
                    <p className="timestamp">{item.fromNow}</p>
                </div>
            </div>
            <p className="post-text">{item.text}</p>
            {imageName && <img className="post-image" src={item.imageUrl} alt={imageName} />}
            <button onClick={handleDelete}>Delete</button>
        </PostItemContainer>
    )
}

export default PostItem