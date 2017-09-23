const path = require('path');

module.exports = {
  // bundleしたいファイルを指定
  entry: './src/index.js',

  // 出力先のディレクトリとファイル名を指定
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  //webpackで使うモジュールについての記述。
  module: {
    loaders: [
      {
        test: /\.js$/,//対象とするファイル,拡張子が.jsのファイルを対象
        exclude: /node_modules/,//除外するファイル
        loader: "babel-loader",
        query:{
          presets:['es2015']
      }//loaderに渡す引数
      }
    ]
  }
};
