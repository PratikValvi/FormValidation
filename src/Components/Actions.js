export const validateFirstName = (firstName, setErrorValue) => {
  let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
  if (!firstName) {
    setErrorValue({
      type: 'firstNameError',
      payload: 'First Name is Required'
    })
  } else if (!nameRegex.test(firstName)) {
    setErrorValue({
      type: 'firstNameError',
      payload: 'First Name is not Valid'
    })
  } else {
    setErrorValue({
      type: 'firstNameError',
      payload: ''
    })
  }
}

export const validateLastName = (lastName, setErrorValue) => {
  let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
  if (!lastName) {
    setErrorValue({
      type: 'lastNameError',
      payload: 'Last Name is Required'
    })
  } else if (!nameRegex.test(lastName)) {
    setErrorValue({
      type: 'lastNameError',
      payload: 'Last Name is not Valid'
    })
  } else {
    setErrorValue({
      type: 'lastNameError',
      payload: ''
    })
  }
}

export const validateEmail = (email, setErrorValue) => {
  let emailRegex = RegExp('^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$');
  if (!email) {
    setErrorValue({
      type: 'emailError',
      payload: 'Email is Required'
    })
  } else if (!emailRegex.test(email)) {
    setErrorValue({
      type: 'emailError',
      payload: 'Email is not Valid'
    })
  } else {
    setErrorValue({
      type: 'emailError',
      payload: ''
    })
  }
}

export const validatePassword = (password, setErrorValue) => {
  let passwordRegex = RegExp('^(?=.*[a-z])(?=.*[A-z])(?=.*[0-9])(?=.*[!@?])[a-zA-Z0-9!@?]{8,}$');
  if (!password) {
    setErrorValue({
      type: 'passwordError',
      payload: 'Password is Required'
    })
  } else if (!passwordRegex.test(password)) {
    setErrorValue({
      type: 'passwordError',
      payload: 'Password is not Valid'
    })
  } else {
    setErrorValue({
      type: 'passwordError',
      payload: ''
    })
  }
}