function ajax(method, url, func){
	// 1. 创建对象
	var xhr;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Msxml2.XMLHTTP");
	}
	
	// 2. 设置一下ajax参数
	xhr.open(method, url, true);
	
	// 3. 设置onreadystatechange事件
	xhr.onreadystatechange = function (){
		if(xhr.readyState == 4){ 
			if (xhr.status == 200){
				// 从服务器上回来的数据，肯定是一个字符串（一般来说会是一个json字符串）
				func(xhr.responseText);
			} else {
				alert("服务器出现错误，错误码是 " + xhr.status);
			}
		}
	}
	
	// 4. 和服务器建立连接并发送请求
	xhr.send();
}