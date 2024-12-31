function throttle(func, delay) {
  let lastCall = 0;
  let callCount = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      func(...args);
      lastCall = now;
      callCount++;
      document.getElementById(
        "functionCallCount"
      ).innerText = `Function called: ${callCount}`;
    }
  };
}
function handleLoad() {
  console.log("Loading more content...");
}
let clickCount = 0;
const button = document.getElementById("throttleButton");
const throttledHandler = throttle(handleLoad, 5000);
button.addEventListener("click", () => {
  clickCount++;
  document.getElementById(
    "clickCount"
  ).innerText = `Button clicked: ${clickCount}`;
  throttledHandler();
});
