module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "vue/no-unused-components": "off", // 当存在定义而未使用的组件时，关闭报错
    "no-unused-vars":"off", // 当存在定义而未使用的变量时，关闭报错
    'vue/multi-word-component-names': 'off'  //避免驼峰命名法
  }
}
