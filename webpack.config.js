const path = require('path');

module.exports = {
  // bundleしたいファイルを指定
  entry: './src/index.js',

  // 出力先のディレクトリとファイル名を指定
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
