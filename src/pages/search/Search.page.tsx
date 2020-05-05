import React, { useState, useEffect } from 'react'

import UserList from '../../components/user-list/UserList.component'

import withSpinner from '../../hoc/with-spinner'

import UserService from '../../services/user.service'

import SearchPageContainer from './Search.styles'

const UserListWithSpinner = withSpinner(UserList)

const SearchPage = () => {
    const [users, setUsers] = useState([])
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

    return (
        <SearchPageContainer>
            <UserListWithSpinner isLoading={isLoadingUsers} users={users} />
        </SearchPageContainer>
    )
}

export default SearchPage