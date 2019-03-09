/**
 * 左右匀速平移元素
 * @param ele   需要移动的元素
 * @param aim   移动的终点
 * @param step  每次移动的长度,需要大于0
 * @param time  每次移动的时间间隔
 */
function xmove(ele, aim, step, time) {
    clearInterval(ele.timer);//清除定时器
    var newstep = aim > ele.offsetLeft ? step : -1 * step;//以此来判断应该是加步长还是减去步长
    ele.timer = setInterval(function () {   //创建定时器
        if (Math.abs(aim - ele.offsetLeft) > step) {//盒子和目标值的差的绝对值大于步长时调用timer
            ele.style.left = ele.offsetLeft + newstep + "px";  //移动盒子
        }
        else {//最后闪现到指定位置
            ele.style.left = aim + "px";  //把盒子放到指定位置
            clearInterval(ele.timer);   //移除定时器
        }
    }, time)
}

/**
 * 上下匀速移动元素
 * @param ele   需要移动的元素
 * @param aim   移动的终点
 * @param step  每次移动的长度，需要大于0
 * @param time  移动的时间间隔
 */
function ymove(ele, aim, step, time) {
    clearInterval(ele.timer);//清除定时器
    var newstep = aim > ele.offsetTop ? step : -1 * step;//以此来判断应该是加步长还是减去步长
    ele.timer = setInterval(function () {
        if (Math.abs(aim - ele.offsetTop) > step) {//盒子和目标值的差的绝对值大于步长时调用timer
            ele.style.top = ele.offsetTop + newstep + "px";//移动盒子
        }
        else {//最后闪现到指定位置
            ele.style.top = aim + "px";//把盒子放到指定位置
            clearInterval(ele.timer);//移除定时器
        }
    }, time)
}

/**
 *让元素匀速移动到指定位置
 * @param ele
 * @param xaim
 * @param yaim
 * @param step
 * @param time
 */
function movetoaim(ele, xaim, yaim, step, time) {
    clearInterval(ele.timer);//清除定时器
    var xstep = xaim > ele.offsetTop ? step : -1 * step;//处理x方向步长
    var ystep = yaim > ele.offsetTop ? step : -1 * step;//处理y方向步长
    ele.timer = setInterval(function () {
        //处理x方向
        if (Math.abs(xaim - ele.offsetLeft) > step) {//盒子和目标值的差的绝对值大于步长时，按步长移动盒子
            ele.style.left = ele.offsetLeft + xstep + "px"; //x方向移动
        }
        else {//最后闪现到指定位置
            ele.style.left = xaim + "px";
        }
        //处理y方向
        if (Math.abs(yaim - ele.offsetTop) > step) {//盒子和目标值的差的绝对值大于步长时，按步长移动盒子
            ele.style.top = ele.offsetTop + ystep + "px";//y方向移动
        }
        else {//最后闪现到指定位置
            ele.style.top = yaim + "px";
        }
        //x和y都符合后清除定时器
        if (Math.abs(yaim - ele.offsetTop) < step && Math.abs(xaim - ele.offsetLeft) < step)
            clearInterval(ele.timer);
    }, time)
}

/**
 * 左右缓动
 * @param ele   需要移动的元素
 * @param aim   终点
 * @param time  移动的时间间隔
 */
function xrun(ele, aim, time) {
    clearInterval(ele.timer);//清除定时器
    ele.timer = setInterval(function () {
        var step = (aim - ele.offsetLeft) / 10;//确定步长
        step = step > 0 ? Math.ceil(step) : Math.floor(step);//二次处理步长
        if (Math.abs(aim - ele.offsetLeft) <= Math.abs(step)) {//当距离小于步长
            ele.style.left = aim + "px";//直接移动到指定位置
            clearInterval(ele.timer);//清除定时器
        }
        else
            ele.style.left = ele.offsetLeft + step + "px";//按步长移动盒子
    }, time)
}

/**
 * 上下缓动
 * @param ele   需要移动的元素
 * @param aim   终点
 * @param time  移动时间间隔
 */
function yrun(ele, aim, time) {
    clearInterval(ele.timer);//清除定时器
    ele.timer = setInterval(function () {
        var step = (aim - ele.offsetTop) / 10;//确定步长
        step = step > 0 ? Math.ceil(step) : Math.floor(step);//二次处理步长
        if (Math.abs(aim - ele.offsetTop) <= Math.abs(step)) {//当距离小于步长
            ele.style.top = aim + "px";//直接移动到指定位置
            clearInterval(ele.timer);//清除定时器
        }
        else {
            ele.style.top = ele.offsetTop + step + "px";//按步长移动盒子
        }
    }, time)
}

/**
 * 让元素缓动到指定位置.
 * @param ele
 * @param xaim
 * @param yaim
 * @param time
 */
function runtoaim(ele, xaim, yaim, time) {
    clearInterval(ele.timer);//清除定时器
    ele.timer = setInterval(function () {
        var xstep = (xaim - ele.offsetLeft) / 10;//处理x方向步长
        var ystep = (yaim - ele.offsetTop) / 10;//处理y方向步长
        xstep = xstep > 0 ? Math.ceil(xstep) : Math.floor(xstep);//二次处理x方向步长
        ystep = ystep > 0 ? Math.ceil(ystep) : Math.floor(ystep);//二次处理y方向步长
        //处理x方向
        if (Math.abs(xaim - ele.offsetLeft) <= Math.abs(xstep)) {
            ele.style.left = xaim + "px";
        }
        else {
            ele.style.left = ele.offsetLeft + xstep + "px";
        }
        //处理y方向
        if (Math.abs(yaim - ele.offsetTop) <= Math.abs(ystep)) {
            ele.style.top = yaim + "px";
        }
        else {
            ele.style.top = ele.offsetTop + ystep + "px";
        }
        //x和y都符合后清除定时器
        if (Math.abs(xaim - ele.offsetLeft) <= Math.abs(xstep) && Math.abs(yaim - ele.offsetTop) <= Math.abs(ystep))
            clearInterval(ele.timer);
    }, time)
}

/**
 * 获取滑动的距离
 */
function scroll() {
    return {
        "top": window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
        "left": window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
    }
}

/**
 *让屏幕滚动到指定位置
 * @param aim 跳转的位置
 * @param time 每次跳转的时间间隔
 */
function scrolltoaim(aim, time) {
    clearInterval(timer);//清除定时器
    var scrolltop = scroll().top;//获取初始滚动条距离
    timer = setInterval(function () {
        var step = (aim - scrolltop) / 10;//获取滚动步长
        step = step > 0 ? Math.ceil(step) : Math.floor(step);//二次处理滚动步长
        if (Math.abs(aim - scrolltop) <= Math.abs(step)) {//当距离差小于或等于步长时
            window.scrollTo(0, aim);//直接移动到指定位置
            clearInterval(timer);//清除定时器
        }
        else {
            scrolltop += step;//当前位置加步长
            window.scrollTo(0, scrolltop);//滚动到下一个位置
        }
    }, time)
}


