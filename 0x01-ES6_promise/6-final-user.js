//The code exports a function named handleProfileSignup that accepts firstName, lastName, and fileName as arguments, calls signUpUser and uploadPhoto functions, and returns an array of objects representing the status and value of the settled promises.
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName).catch(error => error)
  ];

  const results = await Promise.allSettled(promises);

  return results.map(result => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason
  }));
}

