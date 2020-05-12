import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/CommentSharp'

import FeedPostItemContainer from './FeedPostItem.styles'

interface FeedPostItemProps {
    item: any,
    onLike: Function,
    onDislike: Function
}

const FeedPostItem = ({ item: { liked, post, postOwner }, onLike, onDislike }: FeedPostItemProps) => {
    const [postLiked, setPostLiked] = useState(liked)

    const imageNameIndex = post.imageUrl.split('/') + 1
    const imageName = post.imageUrl.substr(imageNameIndex)

    const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
        onLike(post._id)
        setPostLiked(true)
    }

    const handleDislike = (e: React.MouseEvent<HTMLButtonElement>) => {
        onDislike(post._id)
        setPostLiked(false)
    }

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
            <div className="actions">
                <IconButton onClick={postLiked ? handleDislike : handleLike}>
                    <FavoriteIcon style={{ color: `${postLiked ? 'red' : ''}`}} />
                </IconButton>
                <Link to={`/post/${post._id}`}>
                    <IconButton>
                        <CommentIcon />
                    </IconButton>
                </Link>
            </div>
        </FeedPostItemContainer>
    )
}

export default FeedPostItem