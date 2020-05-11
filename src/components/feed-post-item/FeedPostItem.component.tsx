import React from 'react'

import FeedPostItemContainer from './FeedPostItem.styles'

interface FeedPostItemProps {
    item: any
}

const FeedPostItem = ({ item: { post, postOwner } }: FeedPostItemProps) => {
    const imageNameIndex = post.imageUrl.split('/') + 1
    const imageName = post.imageUrl.substr(imageNameIndex)

    return (
        <FeedPostItemContainer>
            <div className="user-details">
                <img className="avatar" src={postOwner.avatar} alt="avatar" />
                <div className="user">
                    <p className="author">{postOwner.name}</p>
                    <p className="timestamp">{post.fromNow}</p>
                </div>
            </div>
            <p className="post-text">{post.text}</p>
            {imageName && <img className="post-image" src={post.imageUrl} alt={imageName} />}
        </FeedPostItemContainer>
    )
}

export default FeedPostItem