//defines a function signUpUser that returns a resolved promise with an object containing the provided firstName and lastName values.

function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName
  });
}

export default signUpUser;
