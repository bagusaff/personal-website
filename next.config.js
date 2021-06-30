const withTM = require("next-transpile-modules")(["emailjs-com"]);

module.exports = withTM({
  reactStrictMode: true,
});
