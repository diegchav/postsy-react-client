import React, { useState, useEffect } from 'react'

import UserList from '../../components/user-list/UserList.component'

import withSpinner from '../../hoc/with-spinner'

import UserService from '../../services/user.service'

import SearchPageContainer from './Search.styles'

const UserListWithSpinner = withSpinner(UserList)

const SearchPage = () => {
    const [users, setUsers] = useState<any[]>([])
    const [isLoadingUsers, setIsLoadingUsers] = useState(true)

    useEffect(() => {
        const getUsers = async () => {
            try {
                const allUsers = await UserService.getAll()
                setUsers(allUsers)
                setIsLoadingUsers(false)
            } catch (err) {
                console.error(err)
            }
        }
        getUsers()
    }, [])

    const handleFollowUser = async (userId: string) => {
        try {
            await UserService.follow(userId)
            const updatedUsers = users.map((user: any) => {
                if (user._id === userId) {
                    return {
                        ...user,
                        following: !user.following
                    }
                }
                return user
            })
            setUsers(updatedUsers)
        } catch (err) {
            console.error(err)
        }
    }

    const handleUnfollowUser = async (userId: string) => {
        try {
            await UserService.unfollow(userId)
            const updatedUsers = users.map((user: any) => {
                if (user._id === userId) {
                    return {
                        ...user,
                        following: !user.following
                    }
                }
                return user
            })
            setUsers(updatedUsers)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <SearchPageContainer>
            <UserListWithSpinner isLoading={isLoadingUsers} users={users} onFollowUser={handleFollowUser} onUnfollowUser={handleUnfollowUser} />
        </SearchPageContainer>
    )
}

export default SearchPage