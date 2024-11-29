function autoRetry(promiseFn, maxRetries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    const attempt = (retriesLeft) => {
      promiseFn()
        .then(resolve) // Resolve if the promise is successful
        .catch((error) => {
          console.log(`Attempt failed. Retries left: ${retriesLeft}`);
          if (retriesLeft === 0) {
            reject(error); // Reject if no retries are left
          } else {
            setTimeout(() => {
              attempt(retriesLeft - 1); // Retry after the delay
            }, delay);
          }
        });
    };

    attempt(maxRetries);
  });
}

// Example Usage: Function that always throws an error
function alwaysFailingPromise() {
  return new Promise((resolve, reject) => {
    console.log("Executing promise...");
    reject(new Error("This promise will always fail."));
  });
}

autoRetry(alwaysFailingPromise, 3, 1000)
  .then((result) => console.log("Final result:", result))
  .catch((error) => console.error("Final error after retries:", error));
