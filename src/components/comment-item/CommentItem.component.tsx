import React from 'react'

import CommentItemContainer from './CommentItem.styles'

interface CommentItemProps {
    item: any
}

const CommentItem = ({ item }: CommentItemProps) => {
    const { user } = item

    return (
        <CommentItemContainer>
            <div className="comment__meta">
                <img className="comment__user-avatar" src={user.avatar}  alt="avatar" />
                <div className="comment__info">
                    <div className="comment__author">{user.name}</div>
                    <div className="comment__timestamp">{item.fromNow}</div>
                </div>
            </div>
            <div className="comment__text">
                {item.text}
            </div>
        </CommentItemContainer>
    )
}

export default CommentItem