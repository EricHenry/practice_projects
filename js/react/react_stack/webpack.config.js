module.exports = {
  entry:{
    main:[
      './src/components/main.js'
    ],
  },
  output: {
    filename: './dist/[name].js'
  },
  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:{
           presets: ['es2015']
         }
      }
    ]
  }

}
