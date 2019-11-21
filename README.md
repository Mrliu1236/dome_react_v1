## react-template

### 1.loadable

### 2.'home-page'

用于打包时,资源路径使用的是相对路径.即`./`开头

### 3.'alias'

添加根路径别名,方便引用模块

`config/webpack.config.js`

```
'@': path.resolve(__dirname, '../src'),
```

### 4.注入全局'scss'变量

方便用于复用,在所有的`.scss`文件中默认引入变量文件和公共类.

`config/webpack.config.js`

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
