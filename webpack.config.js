module.exports = {
  module: {
    loaders: [
      { 
        test: /\.html$/,
        loader: 'html-loader'
      },
      { test: /\.(js|jsx)/, 
        loader: "babel-loader", 
        exclude: /node_modules/ 
      }
    ],
  },
};