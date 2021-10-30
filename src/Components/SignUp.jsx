import React, { useReducer } from 'react'
import { Input, Stack, ButtonGroup, Button } from "@chakra-ui/react"
import { initialFieldValues, initialErrorMessages, fieldValueReducer, errorValueReducer } from './Reducers'
import { validateFirstName, validateLastName, validateEmail, validatePassword } from './Actions'

const SignUp = () => {
  const [fieldValues, setFieldValue] = useReducer(fieldValueReducer, initialFieldValues)
  const [errorValues, setErrorValue] = useReducer(errorValueReducer, initialErrorMessages)

  let { firstName, lastName, email, password } = fieldValues

  let { firstNameError, lastNameError, emailError, passwordError } = errorValues

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'firstName':
        setFieldValue({
          type: 'firstName',
          payload: e.target.value
        })
        break;
      case 'lastName':
        setFieldValue({
          type: 'lastName',
          payload: e.target.value
        })
        break;
      case 'email':
        setFieldValue({
          type: 'email',
          payload: e.target.value
        })
        break;
      case 'password':
        setFieldValue({
          type: 'password',
          payload: e.target.value
        })
        break;
      default:
        throw new Error();
    }
  }

  const validateAll = () => {
    validateFirstName(firstName, setErrorValue);
    validateLastName(lastName, setErrorValue);
    validateEmail(email, setErrorValue);
    validatePassword(password, setErrorValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAll();
  }

  const handleReset = ()  => {
    setFieldValue({
      type: 'reset'
    })
  }

  return (
    <div className='form-wrapper'>
      <span className="header">Sign Up Form</span>
      <form>
        <Stack spacing={2}>
          <Input id="firstName" value={firstName} onChange={handleChange} placeholder="First Name..." size="lg" variant="outline" />
          <div>{firstNameError !== '' ? <span className="error-messages-show">{firstNameError}</span> : <span className="error-messages-hidden">First Name Error Message</span>}</div>
          <Input id="lastName" value={lastName} onChange={handleChange} placeholder="Last Name..." size="lg" variant="outline" />
          <div>{lastNameError !== '' ? <span className="error-messages-show">{lastNameError}</span> : <span className="error-messages-hidden">Last Name Error Message</span>}</div>
          <Input id="email" value={email} onChange={handleChange} placeholder="Email..." size="lg" variant="outline" />
          <div>{emailError !== '' ? <span className="error-messages-show">{emailError}</span> : <span className="error-messages-hidden">Email Error Message</span>}</div>
          <Input id="password" value={password} onChange={handleChange} placeholder="Password..." size="lg" variant="outline" />
          <div>{passwordError !== '' ? <span className="error-messages-show">{passwordError}</span> : <span className="error-messages-hidden">Password Error Message</span>}</div>
        </Stack>
        <ButtonGroup variant="outline" className='button-wrapper'>
          <Button size="lg" colorScheme="blue" type="submit" onClick={handleSubmit}>Submit</Button>
          <Button size="lg" colorScheme="black" type="reset" onClick={handleReset}>Reset</Button>
        </ButtonGroup>
      </form>
    </div>
  )
}

export default SignUp