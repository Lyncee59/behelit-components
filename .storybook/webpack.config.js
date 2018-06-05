const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  console.log(configType)
  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
    test: /\.(eot|ttf|otf|woff|woff2|svg)$/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'fonts/[name].[ext]'
      }
    }
  })

  // Return the altered config
  return storybookBaseConfig;
}
