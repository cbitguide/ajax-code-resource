function checkUserNameExists() {
	var username = document.getElementById("logonUser").value;
	if (username == null || username == "") {
		alert("用户名不能为空");
		return false;
	} else {
		doAjax(username); // 以ajax方式提交请求
	}
}

// 根据浏览器的不同，创建XmlHttpRequest对象
var xmlhttp;
function createXmlHttpReqeust() {
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); // MSXML2.XMLHTTP.2.6,MSXML2.XMLHTTP.3.0,MSXML2.XMLHTTP.4.0...
	} catch (e) {
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp = new XMLHttpRequest();
				// 设置xhr请求的超时时间，单位：milliseconds 毫秒，默认值：0，即不设置超时
				xmlhttp.timeout = 3000;

				// 设置响应返回的数据格式，xhr level2新增的属性, 这里设置返回的相应类型为String字符串
				// 还包括"",document,json,blob,arrauBuffer等对象类型,用来取代xhr.overrideMimeType()
				xmlhttp.responseType = "text";
				// if (xmlhttp.overrideMimeType) {
				// xmlhttp.overrideMimeType("text/xml;charset = utf-8");
				// }
			} catch (e) {
			}
		}
	}
}

// 回调函数,用来获取服务器上的响应，并进行页面的更新操作
function huidiao() {
	console.log(xmlhttp);
	if (xmlhttp.readyState == 4) {
		if (xmlhttp.status == 200) {
			// 获取服务器的响应，并且判断之后来更新页面
			var result = xmlhttp.responseText;
			if (result == "true") {
				// document.getElementById("DivUsername").innerHTML = "<font
				// color='red'>*用户名可以使用</font>";
				// document.getElementById("DivUsername").style.display =
				// "inline";

				// alert("会员名存在");

				// 查询所有商品信息
				location.href = 'productlist.jsp';
			} else {
				alert("会员名不存在");
			}
		}
	}
}

function doAjax(name) {
	// 1: 创建XmlHttpRequest对象
	createXmlHttpReqeust();

	// 2: 设置回调函数 (用来获取服务器上的响应，并进行页面的更新操作)
	xmlhttp.onreadystatechange = huidiao;
	// 3: 初始化xmlhttpRequest
	// var url="CheckUserNameServlet?name="+name;
	var url = "UserinfoServlet";
	xmlhttp.open("post", url, true);

	// 4: 发送请求
	xmlhttp.setRequestHeader("Content-type",
			"application/x-www-form-urlencoded");
	xmlhttp.send("name=" + name + "&code=1");
}

$(function() {
	$(".loginBtn").click(function() {
		// 原生的AJAX请求
		// checkUserNameExists();

		// jQuery Ajax请求
		jqueryAjaxLogin();
	});
});

function jqueryAjaxLogin() {
	var logonUser = $("#logonUser").val();
	if (logonUser == null || logonUser == "") {
		alert("用户账号不能为空!")
	} else {
		ajaxRequest(logonUser);
	}
}

function ajaxRequest(logonUser) {
	$.post("UserinfoServlet", {
		"name" : logonUser,
		"code" : 1
	}, function(data) {
		if (data == "true") {
			// 查询所有商品信息
			location.href = 'productlist.jsp';
		} else {
			alert("会员名不存在");
		}
	});
}


