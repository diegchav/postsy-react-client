import isEmail from 'validator/lib/isEmail'

import { ValidationErrors } from '../redux/auth/auth.reducer'

export const validateSignIn = (email: string, password: string) => {
  const validationErrors: ValidationErrors = {}

  if (!email) validationErrors['email'] = 'Email is required'
  else if (!isEmail(email)) validationErrors['email'] = 'Email is not valid'

  if (!password) validationErrors['password'] = 'Password is required'

  return validationErrors
}

export const validateSignUp = (name: string, email: string, password: string) => {
  const validationErrors: ValidationErrors = {}

  if (!name) validationErrors['name'] = 'Name is required'
  else if (name.length > 120) validationErrors['name'] = 'Name must be at most 120 characters'

  if (!email) validationErrors['email'] = 'Email is required'
  else if (!isEmail(email)) validationErrors['email'] = 'Email is not valid'

  if (!password) validationErrors['password'] = 'Password is required'
  else if (password.length < 8) validationErrors['password'] = 'Password must be at least 8 characters'

  return validationErrors
}