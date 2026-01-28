var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,   // <-- IMPORTANT
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.json$/,        // <-- to load JSON files
        type: "json",
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],  // <-- IMPORTANT
  },

  devtool: "#source-map",
};

