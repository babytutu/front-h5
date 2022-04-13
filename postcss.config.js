/**
 * @see https://youzan.github.io/vant/#/zh-CN/advanced-usage
 * @see https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
 */
 module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      replace: false,
    },
  },
}
