import $ from 'jquery';
import AppleIco from './nav.js';
import 'vanilla-tilt';
import Carousel from './carousel.js'
import Tab from './tab.js'
import Water from './waterfall.js'

new AppleIco('#nav');//定义固定顶部菜单

VanillaTilt.init(document.querySelector(".wrap"), { //设置首页动画
	max: 25,
	speed: 400
});
// 首页背景轮播
new Carousel('.look',$(window).width(),$(window).height())

// 整站初始化为tab组件
new Tab($('body'))
//$('body').find('.content section').hide().eq(0).fadeIn()
// 工作经验页面 瀑布流组件布局
new Water('.waterfall')