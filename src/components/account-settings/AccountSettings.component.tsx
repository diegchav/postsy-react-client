import React, { useState, useContext } from 'react'

import UserService from '../../services/user.service'

import { FlashMessageContext, FlashMessageType } from '../../providers/FlashMessage.provider'

import AccountSettingsContainer from './AccountSettings.styles'

interface AccountSettingsProps {
    user: any
}

const AccountSettings = ({ user: { _id, name } }: AccountSettingsProps) => {
    const [state, setState] = useState({
        name
    })

    const { changeFlashMessage } = useContext(FlashMessageContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setState({
            ...state,
            [name]: value
        })
    }

    const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name } = state
        try {
            await UserService.updateUser(_id, name)
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
                <button onClick={handleSave}>Save</button>
            </div>
        </AccountSettingsContainer>
    )
}

export default AccountSettings