function handleResponseFromAPI(promise) {
  promise
    .then((data) => {
      console.log("Got a response from the API");
      return {
        status: 200,
        body: "success",
      };
    })
    .catch((error) => {
      console.log("The API call failed");
      return new Error();
    });
}

export default handleResponseFromAPI;

