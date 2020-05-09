import React from 'react'

import SearchItem from '../search-item/SearchItem.component'

import SearchListContainer from './SearchList.styles'

interface UserListProps {
    users: Array<any>,
    onFollowUser: Function,
    onUnfollowUser: Function
}

const SearchList = ({ users, onFollowUser, onUnfollowUser }: UserListProps) => {
    return (
        <SearchListContainer>
        {
            users.map(user => <SearchItem key={user._id} user={user} onFollow={user.following ? onUnfollowUser : onFollowUser} />)
        }
        </SearchListContainer>
    )
}

export default SearchList