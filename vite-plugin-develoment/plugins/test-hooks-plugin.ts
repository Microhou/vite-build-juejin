/* eslint-disable @typescript-eslint/no-unused-vars */
// 注: 请求响应阶段的钩子
// 如 resolveId, load, transform, transformIndexHtml在下文介绍
// 以下为服务启动和关闭的钩子
import { Plugin } from "vite";

export default function testHookPlugin(): Plugin {
    return {
        name: 'test-hooks-plugin',
        // Vite 独有钩子
        config(config) {
            console.log("config");
        },
        // Vite 独有钩子
        configResolved(resolvedCofnig){
            console.log('configResolved');
        },
        // 通用钩子
        options(opts){
            console.log('options');
            return opts;
        },
        // Vite 独有钩子
        configureServer(server){
            console.log('configureServer');
            setTimeout(() => {
                // 手动退出进程
                process.kill(process.pid, 'SIGTERM');
            }, 6000);
        },
        // 通用钩子
        buildStart() {
            console.log('buildStart');
        },
        // 通用钩子
        buildEnd() {
            console.log('buildEnd');
        },
        // 通用钩子
        closeBundle(){
            console.log('closeBundle');
        }
    }
}