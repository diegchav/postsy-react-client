import React, { useState, useEffect } from 'react'

import List from '../../components/list/List.component'

import withSpinner from '../../hoc/with-spinner'

import AuthService from '../../services/auth.service'
import UserService from '../../services/user.service'

import ProfilePageContainer, { ItemContainer } from './Profile.styles'

const ProfileWithSpinner = withSpinner(ProfilePageContainer)

const ItemComponent = ({ item: { name } }: any) => (
    <ItemContainer>
        <p>{name}</p>
    </ItemContainer>
)

const NoItemsComponent = () => (
    <ItemContainer>
        <p>No items</p>
    </ItemContainer>
)

const ProfilePage = () => {
    const [userFollowing, setUserFollowing] = useState<any[]>([])
    const [userFollowers, setUserFollowers] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getUser = async () => {
            try {
                const { user: { _id } } = await AuthService.getCurrentUser()
                const _user = await UserService.getUser(_id)
                const { following, followers } = _user
                setUserFollowing(following)
                setUserFollowers(followers)
                setIsLoading(false)
            } catch (err) {
                console.error(err)
            }
        }
        getUser()
    }, [])

    return (
        <ProfileWithSpinner isLoading={isLoading}>
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
        </ProfileWithSpinner>
    )
}

export default ProfilePage