import React from 'react'

import getImageNameFromUrl from '../../helpers/get-image-name-from-url.helper'

import PostItemContainer from './PostItem.styles'

interface PostItemProps {
    item: any,
    onDelete: Function
}

const PostItem = ({ item, onDelete }: PostItemProps) => {
    const imageName = getImageNameFromUrl(item.imageUrl)

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