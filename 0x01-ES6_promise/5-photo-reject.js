//The code exports a function named uploadPhoto that returns a rejected promise with an error message stating that the provided fileName cannot be processed.

export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}


