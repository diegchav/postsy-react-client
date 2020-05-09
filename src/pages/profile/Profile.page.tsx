import React, { useState, useEffect } from 'react'

import AccountSettings from '../../components/account-settings/AccountSettings.component'
import List from '../../components/list/List.component'
import PostItem from '../../components/post-item/PostItem.component'
import DeletePostModal from '../../components/delete-post-modal/DeletePostModal.component'

import withSpinner from '../../hoc/with-spinner'

import AuthService from '../../services/auth.service'
import UserService from '../../services/user.service'
import PostService from '../../services/post.service'

import ProfilePageContainer, { ItemContainer } from './Profile.styles'

const ProfileWithSpinner = withSpinner(ProfilePageContainer)

const ItemComponent = ({ item: { name, bio, avatar } }: any) => (
    <ItemContainer>
        <img className="avatar" src={avatar} alt="avatar" />
        <div className="user">
            <p className="name">{name}</p>
            {bio
                ? <p className="bio">{bio}</p>
                : <p className="no-bio">No bio</p>
            }
        </div>
    </ItemContainer>
)

const NoItemsComponent = () => (
    <ItemContainer>
        <p>No items</p>
    </ItemContainer>
)

const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState({})
    const [userFollowing, setUserFollowing] = useState<any[]>([])
    const [userFollowers, setUserFollowers] = useState<any[]>([])
    const [posts, setPosts] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [postToDelete, setPostToDelete] = useState('')
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    useEffect(() => {
        const getUser = async () => {
            try {
                const { user: { _id } } = await AuthService.getCurrentUser()
                const _user = await UserService.getUser(_id)
                const { following, followers } = _user
                const _posts = await PostService.getAll()
                setCurrentUser({ _id: _user._id, name: _user.name, bio: _user.bio, avatar: _user.avatar })
                setUserFollowing(following)
                setUserFollowers(followers)
                setPosts(_posts)
                setIsLoading(false)
            } catch (err) {
                console.error(err)
            }
        }
        getUser()
    }, [])

    const handleOpenDeletePostModal = (id: string) => {
        setPostToDelete(id)
        setIsDeleteModalOpen(true)
    }

    const handleCloseDeletePostModal = () => {
        setPostToDelete('')
        setIsDeleteModalOpen(false)
    }

    const handleDeletePost = async () => {
        try {
            await PostService.delete(postToDelete)
            const _posts = posts.filter(post => post._id !== postToDelete)
            setPosts(_posts)
            setPostToDelete('')
            setIsDeleteModalOpen(false)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
        {
            isDeleteModalOpen &&
            <DeletePostModal
                onClose={handleCloseDeletePostModal}
                onDelete={handleDeletePost} />
        }
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <ProfileWithSpinner isLoading={isLoading}>
                <AccountSettings user={currentUser} />
                <div className="following-and-followers">
                    <List
                        width="48%"
                        title="Following"
                        items={userFollowing}
                        itemKey="_id"
                        ItemComponent={ItemComponent}
                        NoItemsComponent={NoItemsComponent} />
                    <List
                        width="48%"
                        title="Followers"
                        items={userFollowers}
                        itemKey="_id"
                        ItemComponent={ItemComponent}
                        NoItemsComponent={NoItemsComponent} />
                </div>
                <div className="post-list">
                    <List
                        width="100%"
                        title="Posts"
                        items={posts}
                        itemKey="_id"
                        ItemComponent={PostItem}
                        onDelete={handleOpenDeletePostModal} />
                </div>
            </ProfileWithSpinner>
        </div>
        </>
    )
}

export default ProfilePage