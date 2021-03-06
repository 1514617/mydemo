/*
	通过ID获取DOM节点
*/
function $(id) {
	return document.getElementById(id);
}
/*
	通过class名获取DOM节点
*/
function byClassName(obj, sClassName) {
	if(obj.getElementsByClassName) {
		return obj.getElementsByClassName(sClassName);
	} else {
		let aAll = obj.getElementsByTagName('*');
		let aRet = [];
		for(var i = 0; i < aAll.length; i++) {
			if(aAll[i].className === sClassName) {
				aRet.push(aAll[i]);
			}
		}
		return aRet;
	}
}
/*
	获取属性的函数
*/
function getStyle(obj, sAttr) {
	if(obj.currentStyle) {
		return obj.currentStyle[sAttr];
	} else {
		return getComputedStyle(obj, false)[sAttr];
	}
}
/*
	缓冲运动
*/
function bufferMove(obj, oTarget) {
	return new Promise(function (resolve) {
		// 清除定时器
		clearInterval(obj.iTimer);
		obj.iTimer = setInterval(function () {
			let bBtn = true;
			for(var sAttr in oTarget) {
				// 获取当前值
				if(sAttr === 'opacity') {
					var iCur = Math.round(getStyle(obj, sAttr) * 100);
				} else {
					var iCur = Math.round(parseFloat(getStyle(obj, sAttr)));
				}
				// 获取速度
				var iSpeed = (oTarget[sAttr] - iCur ) / 8;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

				// 计算下一次出现的位置
				var iNext = iCur + iSpeed;

				// 赋值
				if(sAttr === 'opacity') {
					obj.style.opacity = iNext / 100;
					obj.style.filter  = 'alpha(opacity=' + iNext +')';
				} else {
					obj.style[sAttr] = iNext + 'px';
				}

				// 判断当前属性运动是否已完成
				if(oTarget[sAttr] !== iNext) {
					bBtn = false;
				}
			}

			if(bBtn) {
				clearInterval(obj.iTimer);
				resolve();
			}
		}, 50);
	});
}