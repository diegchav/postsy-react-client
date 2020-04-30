import React, { HTMLAttributes } from 'react'

import CreatePostButtonContainer from './CreatePostButton.styles'

const CreatePostButton = ({ onClick }: HTMLAttributes<HTMLButtonElement>) => (
    <CreatePostButtonContainer onClick={onClick}>Create Post</CreatePostButtonContainer>
)

export default CreatePostButton