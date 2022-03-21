# dodoui-react

[![CircleCI](https://circleci.com/gh/HE77XTL/dodoui-react.svg?style=svg)](https://circleci.com/gh/HE77XTL/dodoui-react)
[![npm version](https://badge.fury.io/js/hedongsheng-ui-react.svg)](https://badge.fury.io/js/hedongsheng-ui-react)

## Install
```
npm install hedongsheng-ui-react
```

```
yarn add hedongsheng-ui-react
```


## 项目说明
### React && TypeScript && webpack -- 造轮子


### 搭建流程
#### 1、技术栈选择
1、[React](https://zh-hans.reactjs.org/)    
2、[TypeScript](https://www.tslang.cn/)  
3、[webpack](https://webpack.js.org/)  
4、[Jest](https://jestjs.io/zh-Hans/)  
5、[CircleCI](https://circleci.com/)  

#### 2、webpack 配置
核心概念  

入口(entry)  
输出(output)  
loader  
插件(plugins)  
详见webpack.config.js    
[参考资料](https://www.webpackjs.com/concepts/) 

#### 3、TypeScript 配置
[参考资料](https://www.tslang.cn/docs/handbook/compiler-options.html)
 
#### 4、测试框架Jest 配置
[参考资料](https://jestjs.io/docs/zh-Hans/tutorial-react)    
[中文参考资料](https://doc.ebichu.cc/jest/docs/zh-Hans/configuration.html#content)   
css 和文件（如图片，svg文件等）等静态资源，mock [配置参考](https://doc.ebichu.cc/jest/docs/zh-Hans/webpack.html)

#### 5、CircleCI配置
具体参考配置文件，npm 设置里生成Auth Tokens，在CircleCI 中添加环境变量NPM_TOKEN，便可拿到权限自动发布 


#### todo list

1、dialog 优化 -> Portals ( 挂在到 root 之外， 保持 react 的事件机制)；
直接js 挂到 body 上 ， 事件 就不走 react 的合成事件

2、对全局的尺寸做规划（font-size padding margin 等）
