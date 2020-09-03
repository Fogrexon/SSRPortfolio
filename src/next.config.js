require('dotenv').config();

module.exports = {
  distDir: '../.next',
  watchOptions: {
    // ミリ秒ごとにチェック
    poll: 1000,
  },
};
