module.exports = {
  entry: [
    './app/app.jsx',
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: __dirname + '/app/components/Main.jsx',
      Nav: __dirname + '/app/components/Nav.jsx',
      Weather: __dirname + '/app/components/Weather.jsx',
      About: __dirname + '/app/components/About.jsx',
      Example: __dirname + '/app/components/Example.jsx',
      WeatherForm: __dirname + '/app/components/WeatherForm.jsx',
      WeatherInfo: __dirname + '/app/components/WeatherInfo.jsx',
      openWeatherMap: __dirname + '/app/api/openWeatherMap.jsx',
      ErrorModal: __dirname + '/app/components/ErrorModal.jsx',
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ],
  },

  devtool: 'cheap-module-eval-source-map'
};
