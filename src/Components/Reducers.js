export const initialFieldValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

export const fieldValueReducer = (fieldValues, action) => {
  switch (action.type) {
    case 'firstName':
      return { 
        ...fieldValues,
        firstName: action.payload };
    case 'lastName':
      return { 
        ...fieldValues,
        lastName: action.payload };
    case 'email':
      return { 
        ...fieldValues,
        email: action.payload };
    case 'password':
      return { 
        ...fieldValues,
        password: action.payload };
    case 'reset':
      return {
        ...initialFieldValues };
    default:
      throw new Error();
  }
}

export const initialErrorMessages = {
  firstNameError: '',
  lastNameError: '',
  emailError: '',
  passwordError: ''
}

export const errorValueReducer = (errorValues, action) => {
  switch (action.type) {
    case 'firstNameError':
      return { 
        ...errorValues,
        firstNameError: action.payload };
    case 'lastNameError':
      return { 
        ...errorValues,
        lastNameError: action.payload };
    case 'emailError':
      return { 
        ...errorValues,
        emailError: action.payload };
    case 'passwordError':
      return { 
        ...errorValues,
        passwordError: action.payload };
    default:
      throw new Error();
  }
}