import './style.scss';      // 引入樣式
import 'bootstrap';         // 引入 Bootstrap JS (輪播/彈窗必備)
import AOS from 'aos';      // 引入動畫庫
import 'aos/dist/aos.css';  // 引入動畫 CSS

// 初始化 AOS
AOS.init({
  duration: 1000,   // 動畫持續 1 秒
  once: false,      // 捲動來回都會觸發
  offset: 120,      // 偏移觸發點
  easing: 'ease-out-cubic'
});

console.log("論壇網站已完全載入，動畫與輪播功能就緒。");