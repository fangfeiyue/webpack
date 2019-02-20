# webpack

### webpack初识

webpack是一个模块打包工具。

很久之前前端只是完成一些非常简单的功能，很多的前端的工作都是由后端或者UI完成。代码量少的时候将js、css、html代码放到一个html文件中写也没关系，代码量稍微多点为了方便维护将js、css、html代码分别写在对应的js、css、html文件中然后在html文件中引入相应文件即可。但是随着前端的发展，前端需要实现的功能越来越多逻辑也越来越复杂，面向过程的编码方式导致js文件中的代码越来越多变的难以维护，这个时候我们引入面向对象的编程方式，将相应的功能分别写到相应的js文件中然后在html中引入需要的js文件，但是这样分的文件越多发送的http请求越多导致页面的加载速度变慢，文件的引入顺序也很重要，一旦颠倒就会报错。

package.json中添加private属性，如果这个属性被设置为true，npm将拒绝发布它，这是为了防止一个私有模块被无意间发布出去。

### webpack的安装

局部安装

在终端执行`npm install --save-dev webpack`或者`npm install --save-dev webpack@<version>`<version>指特定的版本号，如果使用webpack4或者webpack4以后的版本需要安装CLI，在终端输入`npm install --save-dev webpack-cli`。局部安装时--save-dev命令可以简写为-D.

仅仅在局部安装完webpack后，在终端输入`webpack -v`查看webpack版本会报`webpack: command not found`，这是因为当输入`webpack`命令后，nodeJS会到全局模块的目录中找webapck，但是我们并没有在全局安装webpack所以就找不到webpack这个命令。这个时候应该怎么查看局部安装的webpack版本呢？我们可以在终端输入`npx webpack -v`就可以看到webpack版本了。npx这个命令会在当前项目中的node_modules文件中去找webpack。

全局安装

在终端执行`npm install --global webpack`命令可全局安装webpack，但不建议全局安装webpack，全局安装将您锁定到webpack的特定版本，并且在使用不同版本的项目中可能会失败。

怎么样删除全局安装的webpack呢？

在终端执行`npm uninstall webpack -g`即可

