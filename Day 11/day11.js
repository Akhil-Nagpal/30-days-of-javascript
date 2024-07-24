// *-*-*-*-* Activity 1 *-*-*-*-*
// Creating a promise that resolves with the message "Hello" after 2 seconds.
const prom = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hello");
  }, 2000);
});
// Handling the resolved promise and logging the message.
prom.then((message) => console.log(message));

// *-*-*-*-* Activity 2 *-*-*-*-*
// Creating a promise that rejects with an error message after 2 seconds.
const promise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Oh! No!");
  }, 2000);
});
// Handling the rejection and logging an error message.
promise.catch((err) => {
  console.log("An error occurred");
});

// *-*-*-*-* Activity 3 *-*-*-*-*
// Function to create a promise that resolves with a message after a specified delay.
const fetchData = (message, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};
// Chaining promises to simulate a series of asynchronous data fetches.
fetchData("fetching the data", 2000)
  .then((result) => {
    console.log(result);
    return fetchData("fetching blogs", 2000);
  })
  .then((result) => {
    console.log(result);
    return fetchData("fetching comments", 2000);
  })
  .then((result) => {
    console.log(result);
    console.log("All data fetching successful");
  })
  .catch((err) => console.log("An error occurred:", err));

// *-*-*-*-* Activity 4 *-*-*-*-*
// An async function to resolve a promise and log the result.
const resolved = async () => {
  const response = await new Promise((response) => {
    response("hurray!");
  });
  console.log(response);
};
resolved();

// *-*-*-*-* Activity 5 *-*-*-*-*
// An async function to handle a rejected promise and log the error.
const rejected = async () => {
  try {
    const reject = await new Promise((_, reject) => {
      reject("Oh! No!");
    });
  } catch (error) {
    console.error("An error occurred:", error);
  }
};
rejected();

// *-*-*-*-* Activity 6 *-*-*-*-*
// Fetching jokes from an API and logging the result.
const fetchJokes = () => {
  const url = "https://api.freeapi.app/api/v1/public/randomjokes";
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.data))
    .catch((err) => console.log("An error occurred:", err));
};
fetchJokes();

// *-*-*-*-* Activity 7 *-*-*-*-*
// An async function to fetch books from an API and handle errors.
const fetchBooks = async () => {
  const url = "https://api.freeapi.app/api/v1/public/books";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
  } catch (error) {
    console.error("Oh! No!:", error);
  }
};
fetchBooks();

// *-*-*-*-* Activity 8 *-*-*-*-*
// Using Promise.all to wait for multiple promises to resolve and log their values.
const promise1 = new Promise((res, rej) => {
  setTimeout(() => res("Promise 1 resolved"), 1000);
});
const promise2 = new Promise((res, rej) => {
  setTimeout(() => res("Promise 2 resolved"), 1000);
});
const promise3 = new Promise((res, rej) => {
  setTimeout(() => res("Promise 3 resolved"), 1000);
});

const fetchMultiplePromise = () => {
  Promise.all([promise1, promise2, promise3])
    .then((result) => console.log(result))
    .catch((err) => console.error("Error:", err));
};
fetchMultiplePromise();

// *-*-*-*-* Activity 9 *-*-*-*-*
// Using Promise.race to log the value of the first promise that resolves.
const prom1 = new Promise((res, rej) => {
  setTimeout(() => res("Promise 1 resolved"), 2000);
});
const prom2 = new Promise((res, rej) => {
  setTimeout(() => res("Promise 2 resolved"), 1000);
});
const prom3 = new Promise((res, rej) => {
  setTimeout(() => res("Promise 3 resolved"), 1500);
});

const fetchFirstPromise = () => {
  Promise.race([prom1, prom2, prom3])
    .then((result) => console.log(result))
    .catch((err) => console.error("Error:", err));
};
fetchFirstPromise();
