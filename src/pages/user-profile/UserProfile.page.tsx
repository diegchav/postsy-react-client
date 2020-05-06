import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import List from '../../components/list/List.component'

import withSpinner from '../../hoc/with-spinner'

import UserService from '../../services/user.service'

import UserProfilePageContainer, { ItemContainer } from './UserProfile.styles'

const UserProfileWithSpinner = withSpinner(UserProfilePageContainer)

const FollowingItem = ({ item: { name } }: any) => (
    <ItemContainer>
        <p>{name}</p>
    </ItemContainer>
)

const FollowerItem = ({ item: { name } }: any) => (
    <ItemContainer>
        <p>{name}</p>
    </ItemContainer>
)

const NoItemsComponent = () => (
    <ItemContainer>
        <p>No items</p>
    </ItemContainer>
)

const UserProfilePage = () => {
    const [user, setUser] = useState('')
    const [userFollowing, setUserFollowing] = useState<string[]>([])
    const [userFollowers, setUserFollowers] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const { userId } = useParams()

    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await UserService.getUser(userId || '')
                const { name, following, followers } = user
                setUser(name)
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
                    {user}
                </div>
            </div>
            <div className="following-and-followers">
                <List
                    width="48%"
                    height="90%"
                    title="Following"
                    items={userFollowing}
                    itemKey="_id"
                    ItemComponent={FollowingItem}
                    NoItemsComponent={NoItemsComponent} />
                <List
                    width="48%"
                    height="90%"
                    title="Followers"
                    items={userFollowers}
                    itemKey="_id"
                    ItemComponent={FollowerItem}
                    NoItemsComponent={NoItemsComponent} />
            </div>
        </UserProfileWithSpinner>
    )
}

export default UserProfilePage