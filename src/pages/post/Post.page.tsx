import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import UserPostItem from '../../components/user-post-item/UserPostItem.component'
import CommentPost from '../../components/comment-post/CommentPost.component'
import List from '../../components/list/List.component'
import CommentItem from '../../components/comment-item/CommentItem.component'

import PostService from '../../services/post.service'

import withSpinner from '../../hoc/with-spinner'

import PostPageContainer from './Post.styles'

const PostPageWithSpinner = withSpinner(PostPageContainer)

const PostPage = () => {
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        const load = async () => {
            try {
                const _post = await PostService.geyById(id || '')
                const _comments = await PostService.getCommentsForPost(id || '')
                setPost(_post)
                setComments(_comments)
                setIsLoading(false)
            } catch (err) {
                console.error(err)
            }
        }
        load()
    }, [id])

    const handleComment = async (commentText: string) => {
        try {
            const postId = id || ''
            await PostService.commentPost(postId, commentText)
            const _comments = await PostService.getCommentsForPost(postId)
            setComments(_comments)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <PostPageWithSpinner isLoading={isLoading}>
                <UserPostItem item={post} />
                <CommentPost onComment={handleComment} />
                <div className="comments">
                    <List
                        width="100%"
                        title={`Comments (${comments.length})`}
                        items={comments}
                        itemKey="_id"
                        ItemComponent={CommentItem} />
                </div>
            </PostPageWithSpinner>
        </div>
    )
}

export default PostPage