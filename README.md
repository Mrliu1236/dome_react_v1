## react-template

### 1.loadable

使用`@loadable/component`, 用于组件懒加载.

### 2.'home-page'

用于打包时,资源路径使用的是相对路径.即`./`开头

### 3.'alias'

添加根路径别名,方便引用模块

`config/webpack.config.js`

```
'@': path.resolve(__dirname, '../src'),
```

### 4.注入全局'less'变量

方便用于复用,在所有的`.less`文件中默认引入变量文件和公共类.

`config/webpack.config.js`. 虽然使用的是`sass-resources-loader`,但对 less 也有效果.另外`style-reource-loader`这个插件有问题, 修改全局文件的时候,无法触发热更新.

```
injectStyleResource
```

### 5.mobx@4.x

由于`mobx@5.x`使用的是`Proxy`功能,在 ie 下无法使用,因此使用 4.x 的版本

### 6.打包模式

1. `build` - 保留`source-map`和`debug`.方便检错.
2. `build:prod` - 正式发布版

### 7.css 预编译

由于`node-sass`存在版本不兼容问题,选择`less`.

### 8.polyfill

`babel@7.4`开始不再使用[@babel/polyfill](https://babeljs.io/docs/en/v7-migration#remove-proposal-polyfills-in-babel-polyfill-https-githubcom-babel-babel-issues-8416).

```
yarn add core-js@^3 regenerator-runtime
```

`.babelrc`

```
{
  "presets": [
    "react-app",
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": 3 //使用3.x
      }
    ]
  ],
}
```

`src/index.js`

```
import 'core-js/stable'
import 'regenerator-runtime/runtime'
```
