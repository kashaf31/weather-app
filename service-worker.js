self.addEventListener("install", function (event) {
  console.log("Service Worker installed");
});

self.addEventListener("fetch", function (event) {
  // You can cache responses here
});
