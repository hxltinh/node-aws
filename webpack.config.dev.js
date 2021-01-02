const path = require("path");

const config = {
  mode: "development",
  entry: {
    vendor: ["@babel/polyfill", "react"], // Third party libraries
    index: ["./src/components/react/dev.js"],
    /// Every pages entry point should be mentioned here
  },
  devServer: {
    contentBase: path.join(__dirname, "src/components/react"),
    historyApiFallback: true,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader", // asks bundler to use babel loader to transpile es2015 code
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        exclude: [/node_modules/, /public/],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"],
  }, // If multiple files share the same name but have different extensions, webpack will resolve the one with the extension listed first in the array and skip the rest.
};

module.exports = config;
