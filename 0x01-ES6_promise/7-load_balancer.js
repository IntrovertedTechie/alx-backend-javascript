//The code exports a function named loadBalancer that accepts two promises, chinaDownload and USDownload, and returns the value of the promise that resolves first.

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}

