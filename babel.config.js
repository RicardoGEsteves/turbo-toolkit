module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['babel-plugin-react-compiler', {
      compilationMode: 'infer',
      runtimeModule: 'react-compiler-runtime'
    }]
  ]
};
