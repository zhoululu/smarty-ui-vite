module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential', // 使用 Vue 3 相关的 ESLint 规则
    'eslint:recommended', // 使用推荐的 ESLint 规则
    'plugin:@typescript-eslint/recommended', // 使用 TypeScript 推荐的 ESLint 规则
    'prettier', // 启用 eslint-plugin-prettier 插件
  ],
  // 使用 Vue 特定的解析器
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 添加 TypeScript 解析器
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier', '@typescript-eslint'],

  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 关闭函数返回类型要求
    '@typescript-eslint/no-explicit-any': 'off', // 关闭不允许使用 any 类型的规则
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: false,
      },
    ], // 将 prettier 错误作为 ESLint 错误显示
  },
}
