/*handles the signup process by uploading a photo and creating a user, logging relevant information, or displaying an error message if the signup system is offline.*/
import { createUser, uploadPhoto } from './utils.js';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const { body } = values[0];
      const { firstName, lastName } = values[1];

      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
