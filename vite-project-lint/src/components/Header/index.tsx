import { useEffect } from 'react';

// 1. 导入图片
import logoSrc from '@assets/imgs/vite.png';
import './index.scss';
// import Worker from './example.js?worker';

// // 1. 初始化 Worker 实例
// const worker = new Worker();

// // 2. 主线程监听 worker 的信息
// worker.addEventListener('message', (e) => {
//   console.log(e);
// });

export function Header() {
  useEffect(() => {
    const img = document.getElementById('logo') as HTMLImageElement;
    img.src = logoSrc;
  }, []);

  return (
    <div>
      {/* <img className="m-auto mb-4" src={logoSrc} alt="" /> */}
      <img id="logo" className="m-auto mb-4" alt="" />
      <div className="header">this is img</div>
    </div>
  );
}
