import React, { useState, useContext } from 'react'

import UserService from '../../services/user.service'

import { FlashMessageContext, FlashMessageType } from '../../providers/FlashMessage.provider'

import AccountSettingsContainer from './AccountSettings.styles'

interface AccountSettingsProps {
    user: any
}

const AccountSettings = ({ user: { _id, name, bio } }: AccountSettingsProps) => {
    const [state, setState] = useState({
        name,
        bio
    })

    const { changeFlashMessage } = useContext(FlashMessageContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name, bio } = state
        try {
            await UserService.updateUser(_id, name, bio)
            changeFlashMessage('Successfully saved settings', FlashMessageType.Success)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <AccountSettingsContainer>
            <h1>Account Settings</h1>
            <div className="form">
                <div className="input-form">
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={state.name}
                        onChange={handleChange}
                        autoFocus />
                </div>
                <div className="input-form">
                    <label>Bio:</label>
                    <textarea
                        rows={5}
                        name="bio"
                        value={state.bio}
                        onChange={handleChange} />
                </div>
                <button onClick={handleSave}>Save</button>
            </div>
        </AccountSettingsContainer>
    )
}

export default AccountSettings