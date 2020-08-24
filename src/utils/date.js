
export function dateFilter(date) {
	date = new Date(date);
	return date.getFullYear() + "年"+ //不够两位字符补零
		((date.getMonth() + 1)).toString().padStart(2, "0") + "月" +
		(date.getDate()).toString().padStart(2, "0") + "日  " ;
		// (date.getHours()).toString().padStart(2, "0") + ":" +
		// (date.getMinutes()).toString().padStart(2, "0") + ":" +
		// (date.getSeconds()).toString().padStart(2, "0");
	// return str;
}

export function readTimeFilter(time) {

	if(time<86400){
		return parseInt(time / 3600) + "小时" +
			parseInt(time % 3600 / 60) + "分钟";
	}else{
		return parseInt(time / 86400) +"天" +
			parseInt(time % 86400 / 3600) + "小时" +
			parseInt(time % 86400 % 3600 / 60) + "分钟";
	}
}
// export default date;