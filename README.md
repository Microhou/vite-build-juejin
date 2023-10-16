# vite-build-juejin
Learn vite build knowledge.

## day2 
1. 文件划分 -- 就是想传统的Js 文件引入到html 中那样。
2. 命名空间 -- 把变量挂载到window上
3. IIFE(立即执行函数)

### 三大模块规范 
1. CommonJS  - 不适合在浏览器中运行的模块规范。同步加载
2. AMD （Asynchronous Module Definition）即异步模块定义规范 
3. UMD (Universal Module Definition)规范 其实它并不算一个新的规范，只是兼容 AMD 和 CommonJS 的一个模块化方案，可以同时运行在浏览器和 Node.js 环境。
4. ES6 Module 也被称作 ES Module(或 ESM)，是由 ECMAScript 官方提出的模块化规范，作为一个官方提出的规范，ES Module 已经得到了现代浏览器的内置支持。

### vite 从零搭建
1. 在 Vite 项目中，**一个import 语句即代表一个 HTTP 请求。**
2. 你应该知道了 Vite 所倡导的no-bundle理念的真正含义: **利用浏览器原生 ES 模块的支持，实现开发阶段的 Dev Server，进行模块的按需加载，而不是先整体打包再进行加载。**


### 样式方案

### 代码规范
1. JS/TS 规范工具: ESLint
2. CRLF (Windows) 和 LF (Unix) 是两种不同的换行符

### 预购建
1. 为什么需要预购建
    依赖预构建主要做了两件事情：
        a. 一是将其他格式(如 UMD 和 CommonJS)的产物转换为 ESM 格式，使其在浏览器通过 <script type="module"><script>的方式正常加载。
        b. 二是打包第三方库的代码，将各个第三方库分散的文件合并到一起，减少 HTTP 请求数量，避免页面加载性能劣化
        