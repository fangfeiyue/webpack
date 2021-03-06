# webpack

在公司一直用的webpack3，听说webpack4性能提升了好多，很多内容都重构了，所以研究下webpack4，因为项目比较紧只能晚上下班抽一点点时间看看先简略记下wepack中的知识点，语句如有不通或者知识点不尽详细的请见谅，后期找时间完善

### webpack初识

webpack是一个模块打包工具。

很久之前前端只是完成一些非常简单的功能，很多的前端的工作都是由后端或者UI完成。代码量少的时候将js、css、html代码放到一个html文件中写也没关系，代码量稍微多点为了方便维护将j s、css、html代码分别写在对应的js、css、html文件中然后在html文件中引入相应文件即可。但是随着前端的发展，前端需要实现的功能越来越多逻辑也越来越复杂，面向过程的编码方式导致js文件中的代码越来越多变的难以维护，这个时候我们引入面向对象的编程方式，将相应的功能分别写到相应的js文件中然后在html中引入需要的js文件，但是这样分的文件越多发送的http请求越多导致页面的加载速度变慢，文件的引入顺序也很重要，一旦颠倒就会报错。

package.json中添加private属性，如果这个属性被设置为true，npm将拒绝发布它，这是为了防止一个私有模块被无意间发布出去。

### webpack的安装

局部安装

在终端执行`npm install --save-dev webpack`或者`npm install --save-dev webpack@<version>`<version>指特定的版本号，如果使用webpack4或者webpack4以后的版本需要安装CLI，在终端输入`npm install --save-dev webpack-cli`。局部安装时--save-dev命令可以简写为-D。安装`webpack-cli`的作用使我们可以在终端运行webpack命令

仅仅在局部安装完webpack后，在终端输入`webpack -v`查看webpack版本会报`webpack: command not found`，这是因为当输入`webpack`命令后，nodeJS会到全局模块的目录中找webapck，但是我们并没有在全局安装webpack所以就找不到webpack这个命令。这个时候应该怎么查看局部安装的webpack版本呢？我们可以在终端输入`npx webpack -v`就可以看到webpack版本了。npx这个命令会在当前项目中的node_modules文件中去找webpack。这样的好处是便于我们在不同的项目中使用不同的webpack版本。

全局安装

在终端执行`npm install --global webpack`命令可全局安装webpack，但不建议全局安装webpack，全局安装将您锁定到webpack的特定版本，并且在使用不同版本的项目中可能会失败。

怎么样删除全局安装的webpack呢？

在终端执行`npm uninstall webpack -g`即可

### webpack的配置文件

webpack团队提供了一些默认的配置，所以我们在终端执行`npx webpack index.js`可以将index.js引用的js文件进行打包。但是我们在做项目打包的时候，每个工程的特点和复杂度是不同的，默认webpack配置不一定能满足我们的需求，需要我们根据自己的项目来配置webpack，所以webpack提供了配置文件以便开发者根据自己的项目配置webpack。

在项目根目录下新建webpack.config.js文件并输入以下代码，然后在终端执行`npx wepback`依然可以正常执行命令。

```
const path = require("path");

module.exports = {
  entry: "./code/1webpack初识/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(`${__dirname}/code/1webpack初识`, "dist")
  }
};
```

entry对应的是入口文件

output配置打包后的输出文件信息

filename输出文件的名字

path将文件输出到项目的哪个位置

如果我们给webpack的配置文件起的名字不是webpack.config.js而是其他名字，如webpack.js，在终端执行`npx webpack`会报错，因为webpack找不到配置文件。如果想使用自己定义的配置文件名终端需要输入`npx webpack --config <webpack的配置文件名>`方可正确运行webpack。

每次运行webpack都要在终端执行`npx webpack`命令，有时经常把npx写成npm导致运行失败，怎么解决这个问题呢？

我们可以打开package.json文件，在scripts属性中写上`"start": "webpack"`具体代码如下
```
...
"scripts": {
  "start": "webpack"
}
...
```
以后我们要运行webpack只需要在终端输入`npm start`命令即可。

###  Webpack 打包输出内容

当我们在终端成功执行`npm start`命令后会看到终端输出了一堆内容（效果如下），这些内容是干什么的，这里我们就简单说下。

![webpack打包输出](https://github.com/fangfeiyue/webpack/blob/master/src/img/%E6%89%93%E5%8C%85%E8%BE%93%E5%87%BA.png)

`Hash: 5f3b653ffdb4453a9037`本次打包对应的唯一的hash值

`Version: webpack 4.29.5`打包用的webpack版本

`Time: 86ms`本次打包耗时多少

| Asset | Size | Chunks | Chunk Names  |
| ------ | ------ | ------ | ------ |
| bundle.js | 1.18 KiB  | 0 | main |

Asset：bundle.js表示打包了一个bundle.js文件

Size:1.18KiB表示打包后的文件大小为1.18Kb

Chunks：0表示每个文件对应的唯一id值

Chunk Names：main表示js文件对应的名字为main，在我们配置单个js文件打包的时候在webpack打包文件中写了`entry: "./src/1webpack初识/index.js"`，它实际是`entry: {main: "./src/1webpack初识/index.js"}`的简写，Chunk Names对应的main就是entry配置的main

```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
```

警告是因为我们在配置webpack配置文件的时候没有设置mode选项，mode的值可为development和production，默认为production。如果赋值为development打包后的budnle文件不会被压缩，如果配置成production打包后的bundle文件会压缩。因为我们是现在是开发用的所以可以先配置成development,代码如下：

```
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/1webpack初识/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

### loader

如下代码我们想在项目index.js文件中引入图片。
```
import imgSrc from './img/1.png';

const root = document.getElementById('root');
const img = new Image;

img.src = imgSrc;
root.append(img);
```
当我们在终端执行`npx webpack index.js`终端报错了`Module parse failed: Unexpected character '�' (1:0)You may need an appropriate loader to handle this file type.`这是因为webpack默认配置文件不支持导入img图片，这个时候我们需要用到loader来加载对应的资源。

加载图片资源我们可以使用file-loader或url-loader，以下我们分别介绍这两个loader的。

file-loader

首先安装file-loader,用终端开发项目目录执行`npm install file-loader --save-dev`,然后配置webpack.config.js

```
module.exports = {
  entry: '',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
    test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'img/'
        }
      }]
    }]
  }
};
```

url-loader

url-loader的运行方式跟file-loader差不多，但是要打包的图片小于limit设置的值会返回一个DataURL

终端输入`npm i -D url-loader`来安装url-loader，将上述代码中的file-loader换成url-loader，然后终端执行`npm start`命令即可。

url-loader会把图片打包成base64的内容插入到js文件中，这样的好处是可以少发一次http请求，但是如果图片比较大会导致打包的js文件也特变大，加载js文件的时间会变长。最好的方式是几kb的图片可以打包到js文件中，较大的图片还是打包成图片比较好。怎么样实现这个功能呢？

其实很简单，我们只需要在webpack.config.js文件中的url-loader配置limit属性，具体代码如下
```
module.exports = {
  //...
  module: {
    rules: [{
    test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          //...
          limit: 20480
        }
      }]
    }]
  }
};
```

打包样式

需要用到css-loader和style-loader

安装css-loader和style-loader

```
npm i -D css-loader style-loader
```

安装完成后需要在webpack配置文件中进行配置，具体代码如下

```
module.exports = {
  //...
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader']
    }]
  }
};
```

css-loader的作用分析css文件之间的关系最终将这些css文件合并成一段css

style-loader的作用通过注入<style>标记将CSS添加到DOM中

如果我们的项目使用了sass就需要安装sass-loader在终端执行`npm i -D sass`，安装完成后修改webpack配置文件如下

```
module.exports = {
  //...
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  }
};
```

当我们在书写css时难免会用到css3的一些属性，但是有些浏览器对css3的支持并不是很友好，这个时候我们需要给特定的css3属性添加浏览器前缀。如果所有的前缀都又我们手动添加实在太繁琐，webpack能不能帮助我们自动添加厂商的前缀呢？答案是肯定的，我们可以使用postcss-loader来实现这个功能。

终端输入`npm i -D postcss-loader autoprefixer`命令进行安装,其中autoprefixer是自动添加厂商前缀用的。

在项目根目录创建postcss.config.js文件，文件的具体配置内容如下

```
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

然后在终端执行npm start进行打包，启动项目即可看到相关的css属性名前增加了厂商前缀

css-loader的配置项importLoaders帮助我们配置在使用css-loader之前应该使用哪些loader

```
module.exports = {
  // ...
  module: {
    rules: [{
      test: /\.scss$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
          importLoaders: 2 
        }
      }, 'postcss-loader', 'sass-loader']
    }]
  }
};
```

### 使用webpack打包字体文件

### webpack

### HtmlWebpackPlugin

HtmlWebpackPlugin会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中

```
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  //...
  module: {
    //...
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })]
};
```

### clean-webpack-plugin

一个webpack插件，用于在构建之前移除/清理构建文件夹

安装

```
npm i clean-webpack-plugin --save-dev
```

使用

```
const CleanWebpackPlugin = require('clean-webpack-plugin')
 
module.exports = {
  //...
  module: {
    //...
  plugins: [new CleanWebpackPlugin(['dist'])]
};
```

### SourceMap

我们在打包中，将开发环境中源代码经过压缩，去空格，babel编译转化，最终可以得到适用于生产环境的项目代码，这样处理后的项目代码和源代码之间差异性很大，会造成无法debug的问题。

如果压缩等处理过的生产环境中的代码出现bug，调试的时候只能定位到压缩处理后的代码的位置，无法定位到开发环境中的源代码。

sourcemap就是为了解决上述代码定位的问题，简单理解，就是构建了处理前的代码和处理后的代码之间的桥梁。主要是方便开发人员的错误定位

webpack配置的mode值为development时会自动开启sourceMap，我们可以给devtool属性赋值来,

devtool可配置的值如下

![devtool的值](https://github.com/fangfeiyue/webpack/blob/master/readmeImg/sourceMap.png)

这里我们挑选几个常用的做下介绍：

`eval`是打包速度最快的一种方式，对于比较复杂的代码，打包后的提示信息可能会不全面

`source-map`会在打包目录下生成一个.map的文件，文件里面就是文件的映射关系。

`inline-source-map`打包的目录下不会生成.map文件，会将文件的映射关系通过dataUrl的方式写到打包的js文件中。

加上`cheap`打包的性能就会提升，如果没有cheap，代码报错后会定位到第几行第几列，一般我们只需要知道错误在第几行就行，只针对业务代码，不会第三方模块做映射

`module`对业务代码和第三方模块做映射

最佳实践：

开发环境中建议使用`cheap-module-eval-source-map`这样打包速度快，提示信息也比较全面方便我们定位错误。

生产环境一般不用sourceMap，如果想在生产环境也使用sourceMap定义错误建议将devtool的值设置为`cheap-module-source-map`

### webpackDevServer

可以帮我们监听文件的变化自动打包并刷新浏览器

安装
```
npm i -D webpack-dev-server
```

使用
```
// webpack配置文件
module.exports = {
  //...
  devServer: {
    port: 8080,
    // 配置代理
    proxy: {
      '/api': 'http://locahost:3000'
    },
    // 是否自动打开浏览器
    open: true,
    contentBase: './dist'
  }
  //...
};

// package.json
//...
"scripts": {
  "start": "webpack-dev-server"
}
//...
```
终端执行npm start

### Hot Module Replacement 热模块更新





### 使用babel处理ES6语法

首先安装babel-loader和babel/core

`npm install --save-dev babel-loader @babel/core`

webpack的配置文件中添加如下内容
```
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
```

babel-loader是webpack和babel做通信的一个桥梁，babel-loader并不会帮我们把es6语法转换成es5语法，babel/preset-env可以帮助我们实现es5的转换

安装babel/preset-env，在终端执行`npm install @babel/preset-env --save-dev`

新建.babelrc文件，输入以下内容
```
{
  "presets": ["@babel/preset-env"]
}
```

然后打包代码，查看打包后的代码发现有有些代码被转换成了ES5语法，如箭头函数，const等，但是像Promise这种还是没有转换，这样如果我们在低版本浏览器运行项目还是会报错，因为低版本浏览器不支持ES6语法

这个时候我们需要再安装babel/polyfill来实现更彻底的转换

`npm install --save @babel/polyfill`

然后再打包，发现这次ES6语法都转成了ES5语法，但是打包后的文件变的很大，安装babel/polyfill的时候打包后的文件只有几KB

![](https://github.com/fangfeiyue/webpack/blob/master/readmeImg/babel1.png)

安装了babel/polyfill后再打包得到的文件居然有几百KB

![](https://github.com/fangfeiyue/webpack/blob/master/readmeImg/babel2.png)
这是因为babel/polyfill要帮我们实现一些低版本浏览器支持的JS代码，然后把这些代码加入到打包后的文件中，这样就导致打包后的文件变的很大

修改.babelrc文件如下
```
{
  "presets": [["@babel/preset-env", {
    "useBuiltIns": "usage"
  }]]
}
```
然后再打包就会发现打包后的文件小了很多
![](https://github.com/fangfeiyue/webpack/blob/master/readmeImg/babel3.png)
我们在.babelrc文件中配置了useBuiltIns参数，会在我们打包的过程中根据代码业务需求来注入对应的内容减少无用的代码注入，可以明显的减小打包后的文件的体检。

如果此时我们查看控制台的输出，会发现控制台输出了如下警告：
![](https://github.com/fangfeiyue/webpack/blob/master/readmeImg/babel3.png)
当我们把useBuiltIns设置为usage的时候polyfills会自动帮我们引入，无需再手动引入polyfills，删除index.js中的import '@babel/polyfill'然后再打包就可以去除这个警告了。

虽然打包后的文件变小了，但是相比之前还是有点大，修改.babelrc文件如下
```
{
  "presets": [["@babel/preset-env", {
    "targets": {
      "edge": "17",
      "firefox": "60",
      "chrome": "67",
      "safari": "11.1",
    },
    "useBuiltIns": "usage"
  }]]
}
```
babel/polyfill会污染全局环境，在我们写库代码的时候要用babel/plugin-transform-runtime

### Tree Shaking

Tree Shaking只支持ES Module, import支持tree-shaking，require不支持tree-shaking

development是模式默认是没有Tree shaking这个功能的,需要在webpack配置文件中输入如下内容
```
optimization: {
  usedExports: true
}
```
webpack4 开始新增了一个 sideEffects 特性，通过给 package.json 加入 sideEffects: false 声明该包模块是否包含 sideEffects(副作用)，从而可以为 tree-shaking 提供更大的优化空间。

如果我们开启了Tree shaking，加入我们引入的是css内容，如`import styles from './index.css'` 还需要在package.json文件中配置sideEffects属性
```
"sideEffects": false,
```

生产模式下Tree shaking的一些配置已经帮我们配置好了，不用在webpack配置文件中配置usedExports属性


### Code Spliting

开发环境下：
```
optimization: {
  splitChunks: {
    chunks: 'all'
  }
}
```

在生产模式下webpack会自动帮我们进行代码分割，无需配置。

[babel/plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/)


### 打包分析，Preloading, Prefetching

package.json
```
"scripts": {
  "start": "webpack --profile --json > stats.json --config ./build/webpack.dev.js",
}
```
终端执行npm start会在项目根目录下生成一个stats.json文件，然后打开[analyse](http://webpack.github.com/analyse)这个网站，在这个网站上传stas.json文件即可看到一些分析

![分析结果](https://github.com/fangfeiyue/webpack/blob/master/readmeImg/webpack%E5%88%86%E6%9E%90.png)
 
### Webpack 与浏览器缓存( Caching )

hash和contenthash区别？

```
output: {
  filename: '[name].[contenthash].js',
  chunkFilename: '[name],[contenthash].js',
  path: path.resolve(__dirname, '../dist')
}
```

用老版本的webpack打包时，即时文件内容没有改变有时也会打包文件的hash值也会变，这时需要在配置文件中配置runtimeChunk属性

manifest(包和包之间的关系)，在老版本的webpack打包的时候可能会发生变化，导致contenthash也发生了变化。

```
optimization: {
  runtimeChunk: {
    name: 'runtime'
  }
}
``` 

### shimming

将this指向window

npm install imports-loader

```
{
  // 将this指向window
  loader: 'imports-loader?this=>window'
}
```

ProvidePlugin

```
plugins: [
  new webpack.ProvidePlugin({
    // 当发现一个模块用了$这个字符串，会自动为这个模块引入jquery
    $: 'jquery',
    // 给某个包中的特定方法起别名,如myUI.js中$('body').css('background', _join(['blue'], ''));
    _join: ['lodash', 'join']
  })
]
```

### 环境变量

package.json中配置--env.production属性

```
"scripts": {
  "start": "webpack --config ./build/webpack.common.js",
  "build": "webpack --env.production --config ./build/webpack.common.js"
},
```

webpack.common.js

```
module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig)
  }else {
    merge(commonConfig, devConfig)
  }
};
```

### 使用 WebpackDevServer 实现请求转发



### WebpackDevServer解决单页面应用路由问题


### EsLint 在 Webpack 中的配置

### Library的打包

当我们打包库的时候可以在webpack中配置如下内容
```
output: {
  // ...
  library: 'library',
  libraryTarget: 'umd'
  // ...
}
```

### PWA

安装workbox-webpack-plugin

`npm install workbox-webpack-plugin -D`

配置webpack生产环境文件

```
const WorkboxPlugin = require('workbox-webpack-plugin');

// ...
plugins: [
  new WorkboxPlugin.GenerateSW({
    skipWaiting: true, // 强制等待中的 Service Worker 被激活
    clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
  })
]
// ...
```

index.js文件中处理逻辑

```
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log(registration);
    }).catch(err => {
      console.log('error');
    });
  });
}
```



chrome://flags/

### webpack性能优化

跟上技术的迭代（Node、Npm、Yarn）

在尽可能少的模块上引用loader

plugin尽可能精简并确保可靠

resolve参数合理配置
```
resolve: {
  extensions: ['.js', '.jsx'],
  alias: {
    fang: path.resolve(__dirname, '../src/child')
  }
  // mainFiles: ['index', 'child']
}
```



DllPlugin适用于dev环境开发调试生产环境这个插件无效的









# 遇到的问题

1.在终端执行npm install的时候终端报`cannot find ./lib/extract-stream.js`，百度了半天也没找到原因，后来想可能是升级node导致的，怎么卸载当前Mac上node，npm配置呢

-homebrew安装的： brew uninstall node

-官网下载pkg安装包的：sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}

2.在使用clean-webpack-plugin插件清除

clean-webpack-plugin only accepts an options object




