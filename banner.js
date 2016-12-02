// banner对象
/**
** _opts_: 生成这个对象的时候需要的一些参数
*/
function Banner(_opts_){

	// banner初始位置
	var currentLeftVal = -400;

	// banner主体块
	var domBanner = _opts_.banner;

	// 左右箭头
	var arrowLeft = _opts_.arrowLeft;
	var arrowRight = _opts_.arrowRight;

	// 下面圆点
	var indexPoints = _opts_.indexPoints;

	// 自动播放的时候切换频率, 默认5秒
	var autoPlayDuring = _opts_.autoPlayDuring || 50000;

	// 每次切换需要的时长, 默认1秒
	var switchPlayDuring = _opts_.switchPlayDuring || 1000;

	// 切换图片时候的动画
	var _animate = function(num, dircetion){
		// 两个参数，移动数量和移动方向
		num = num || 1;
		dircetion = dircetion || 'next';

		// 当前banner的left值
		var _bannerLeft = domBanner.style.left;

		// 通过移动量和方向算下次left的值
		var _nextMove = num * 400;
		var _nextLeftVal;
		if (dircetion === 'next') {
			_nextLeftVal = currentLeftVal - _nextMove;
		}else{
			_nextLeftVal = currentLeftVal + _nextMove;
		}

		//每次应该移动量, 移动次数好像有点儿问题，我想想
		var eachMove = _nextMove / (1000 / switchPlayDuring);
		window.setInterval(function(){

			currentLeftVal = 
			domBanner.style = currentLeftVal + 'px';

		}, switchPlayDuring);

	}

	// 自动播放方法
	var _autoPaly = function(){};

	// 停止自动播放
	var _stopAutoPaly = function(){};

	// 点击左边箭头
	var _prev = function(){
		console.log('u clicked left')
	};

	// 点击右边箭头
	var _next = function(){
		console.log('u clicked right')
	};

	// 点击下面圆点
	var _goto = function(){
		console.log('u clicked point')
	};

	// 初始化
	function init(){

		// 绑定左箭头
		arrowLeft.addEventListener("click", _prev);

		// 绑定右箭头
		arrowRight.addEventListener("click", _next);

		// 绑定圆点点击
		var points = indexPoints.getElementsByTagName('span');
		for (var i = points.length - 1; i >= 0; i--) {
			points[i].addEventListener("click", _goto);
		}

		console.log(_opts_);
	};

	init();

	//返回这些方法
	return{
		animate: _animate,
		autoPlay: _autoPaly,
		stopAutoPaly: _stopAutoPaly,
		prev: _prev,
		next: _next,
		goto: _goto
	}
}

// 从这里开始往下操作这个banner对象
var opts = {};
opts.arrowLeft = document.querySelector('.leftarrow');
opts.arrowRight = document.querySelector('.rightarrow');
opts.banner = document.querySelector('.banner');
opts.indexPoints = document.querySelector('.buttons');

var myBanner = new Banner(opts);
