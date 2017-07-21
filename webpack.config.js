module.exports = {
  entry: './src/index.js',             //webpack to start from here and bundle all modules we depend on
  output: {                            //inside that file into bundle.js file under our public directory
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,                  //Then from every file that ends with .js we want to run the babel-loader on it
        loader: 'babel-loader'          //The babel-loader will take care of transforming the non-standard js that we will
      }                                 //be using like jsx and es2015 which are not supported natively in browsers
    ]
  }
};
