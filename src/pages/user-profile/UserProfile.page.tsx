import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import List from '../../components/list/List.component'

import withSpinner from '../../hoc/with-spinner'

import UserService from '../../services/user.service'

import UserProfilePageContainer, { ItemContainer } from './UserProfile.styles'

const UserProfileWithSpinner = withSpinner(UserProfilePageContainer)

const ItemComponent = ({ item: { name, bio } }: any) => (
    <ItemContainer>
        <p className="name">{name}</p>
        {bio
            ? <p className="bio">{bio}</p>
            : <p className="no-bio">No bio</p>
        }
    </ItemContainer>
)

const NoItemsComponent = () => (
    <ItemContainer>
        <p>No items</p>
    </ItemContainer>
)

const UserProfilePage = () => {
    const [user, setUser] = useState({
        name: '',
        bio: ''
    })
    const [userFollowing, setUserFollowing] = useState<string[]>([])
    const [userFollowers, setUserFollowers] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const { userId } = useParams()

    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await UserService.getUser(userId || '')
                const { name, bio, following, followers } = user
                setUser({
                    name,
                    bio
                })
                setUserFollowing(following)
                setUserFollowers(followers)
                setIsLoading(false)
            } catch (err) {
                console.error(err)
            }
        }

        getUser()
    }, [userId])

    return (
        <UserProfileWithSpinner isLoading={isLoading}>
            <div className="user-information">
                <h1>User Information</h1>
                <div className="user-details">
                    <p className="name">{user.name}</p>
                    {user.bio
                        ? <p className="bio">{user.bio}</p>
                        : <p className="no-bio">No bio</p>
                    }
                </div>
            </div>
            <div className="following-and-followers">
                <List
                    width="48%"
                    height="90%"
                    title="Following"
                    items={userFollowing}
                    itemKey="_id"
                    ItemComponent={ItemComponent}
                    NoItemsComponent={NoItemsComponent} />
                <List
                    width="48%"
                    height="90%"
                    title="Followers"
                    items={userFollowers}
                    itemKey="_id"
                    ItemComponent={ItemComponent}
                    NoItemsComponent={NoItemsComponent} />
            </div>
        </UserProfileWithSpinner>
    )
}

export default UserProfilePage