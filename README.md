# dodoui-react

[![CircleCI](https://circleci.com/gh/HE77XTL/dodoui-react.svg?style=svg)](https://circleci.com/gh/HE77XTL/dodoui-react)
[![npm version](https://badge.fury.io/js/zoro77uitest001.svg)](https://badge.fury.io/js/zoro77uitest001)

## React&&TypeScript&&webpack学习-造轮子，及框架搭建

前端作为一个与设计紧密结合的职业，需要足够的面向设计开发理念。
尤其对于to C 的外部产品，产品的体验和品质尤为重要。
但随着团队规模的扩大，工程化愈发显得重要。因此，开了这个项目，目的主要是对React 框架的进一步学习以及工程化能力的进一步提高。

## 搭建流程
### 1、技术栈选择
1、[React](https://zh-hans.reactjs.org/)    
2、[TypeScript](https://www.tslang.cn/)  
3、[webpack](https://webpack.js.org/)  
4、[Jest](https://jestjs.io/zh-Hans/)  
5、[CircleCI](https://circleci.com/)  

### 2、webpack 配置
核心概念  

入口(entry)  
输出(output)  
loader  
插件(plugins)  
详见webpack.config.js    
[参考资料](https://www.webpackjs.com/concepts/) 

### 3、TypeScript 配置
[参考资料](https://www.tslang.cn/docs/handbook/compiler-options.html)
 
### 4、测试框架Jest 配置
[参考资料](https://jestjs.io/docs/zh-Hans/tutorial-react)    
[中文参考资料](https://doc.ebichu.cc/jest/docs/zh-Hans/configuration.html#content)   
css 和文件（如图片，svg文件等）等静态资源，mock [配置参考](https://doc.ebichu.cc/jest/docs/zh-Hans/webpack.html)

### 5、CircleCI配置
具体参考配置文件，npm 设置里生成Auth Tokens，在CircleCI 中添加环境变量NPM_TOKEN，便可拿到权限自动发布 
