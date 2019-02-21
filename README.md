# webpack

项目比较紧，先简略记下wepack中的知识点，后期找时间完善

### webpack初识

webpack是一个模块打包工具。

很久之前前端只是完成一些非常简单的功能，很多的前端的工作都是由后端或者UI完成。代码量少的时候将js、css、html代码放到一个html文件中写也没关系，代码量稍微多点为了方便维护将js、css、html代码分别写在对应的js、css、html文件中然后在html文件中引入相应文件即可。但是随着前端的发展，前端需要实现的功能越来越多逻辑也越来越复杂，面向过程的编码方式导致js文件中的代码越来越多变的难以维护，这个时候我们引入面向对象的编程方式，将相应的功能分别写到相应的js文件中然后在html中引入需要的js文件，但是这样分的文件越多发送的http请求越多导致页面的加载速度变慢，文件的引入顺序也很重要，一旦颠倒就会报错。

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

警告是因为我们在配置webpack配置文件的时候没有设置mode选项，mode的值可为development和production，如果赋值为development打包后的budnle文件不会被压缩，如果配置成production打包后的bundle文件会压缩。因为我们是现在是开发用的所以可以先配置成development,代码如下：

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




