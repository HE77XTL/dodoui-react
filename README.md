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


### 文档地址：
http://snowzoro.gitee.io/dodoui-react-doc

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


### todoList:

select name 属性（Form 相关的都需要）

disabled: 属性（Form 相关的都需要）

form 表单一行多项

select 数据量大， 分页，滚动， 搜索， 动态请求 下拉箭头,
	onchange 增加 第二个参数， {value, label}
