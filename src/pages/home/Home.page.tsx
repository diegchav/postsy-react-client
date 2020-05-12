import React, { useState, useEffect } from 'react'

import PostService from '../../services/post.service'
import FeedService from '../../services/feed.service'

import CreatePostModal from '../../components/create-post-modal/CreatePostModal.component'
import CreatePostButton from '../../components/create-post-button/CreatePostButton.component'
import List from '../../components/list/List.component'
import FeedPostItem from '../../components/feed-post-item/FeedPostItem.component'

import withSpinner from '../../hoc/with-spinner'

import HomePageContainer from './Home.styles'

const ListWithSpinner = withSpinner(List)

const HomePage = () => {
    const [feeds, setFeeds] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

    useEffect(() => {
        const getPosts = async () => {
            try {
                const _feeds = await FeedService.getAll()
                setFeeds(_feeds)
                setIsLoading(false)
            } catch (err) {
                console.error(err)
            }
        }
        getPosts()
    }, [])

    const handleOpenCreatePostModal = () => {
        setIsCreateModalOpen(true)
    }

    const handleCloseCreatePostModal = () => {
        setIsCreateModalOpen(false)
    }

    const handleCreatePost = async (postText: string, postImageFile?: File) => {
        try {
            await PostService.create(postText, postImageFile)
            const _feeds = await FeedService.getAll()
            setFeeds(_feeds)
            setIsCreateModalOpen(false)
        } catch (err) {
            console.error(err)
        }
    }

    const handleLikePost = async (postId: string) => {
        try {
            await PostService.like(postId)
        } catch (err) {
            console.error(err)
        }
    }

    const handleDislikePost = async (postId: string) => {
        try {
            await PostService.dislike(postId)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
        {
            isCreateModalOpen &&
            <CreatePostModal
                onClose={handleCloseCreatePostModal}
                onCreate={handleCreatePost} />
        }
        <HomePageContainer>
            <CreatePostButton onClick={handleOpenCreatePostModal} />
            <ListWithSpinner
                isLoading={isLoading}
                width="100%"
                items={feeds}
                itemKey="_id"
                ItemComponent={FeedPostItem}
                onLike={handleLikePost}
                onDislike={handleDislikePost} />
        </HomePageContainer>
        </>
    )
}

export default HomePage