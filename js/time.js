
function fnW(str) {
    var num;
    str >= 10 ? num = str : num = "0" + str;
    return num;
}

var timer = setInterval(function () {
    var date = new Date();
    var year = date.getFullYear(); //当前年份
    var month = date.getMonth(); //当前月份
    var data = date.getDate(); //天
    var hours = date.getHours(); //小时
    var minute = date.getMinutes(); //分
    var second = date.getSeconds(); //秒
    var day = date.getDay(); //获取当前星期几 
    var ampm = hours < 12 ? 'am' : 'pm';
    $('#time').html('<span>    </span>' + year + '/' + (month + 1) + '/' + data + '</span>  <span>' + getMyDay(date) + '  </span>'+fnW(hours) + ":" + fnW(minute) + ":" + fnW(second));

}, 1000)

function getMyDay(date){
	var week;
	if(date.getDay()==0) week="星期天"
	if(date.getDay()==1) week="星期一"
	if(date.getDay()==2) week="星期二"
	if(date.getDay()==3) week="星期三"
	if(date.getDay()==4) week="星期四"
	if(date.getDay()==5) week="星期五"
	if(date.getDay()==6) week="星期六"
	return week;
}
