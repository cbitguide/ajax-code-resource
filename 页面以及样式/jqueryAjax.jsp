<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>jQuery Ajax应用</title>
</head>
<body>
	<input type="button" value="jQuery Ajax" class="btnAjax" />
	<br />
	<span class="msg"></span>
</body>

<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript">
	$(function() {
		/* $(".btnAjax").click(function() {
		var xmlHttp = $.ajax({
			async : false,//默认为true，表示异步提交
			type : "POST",
			url : "doAjax.jsp",
			data : {
				"name" : "zhangsan",
				"age" : 22,
			},
			success : function(msg) {
				$(".msg").empty().append(msg);
			},
			error : function(xhr) {
				console.log(xhr.statusText);
			}
		});//.responseText
		console.log(xmlHttp.responseText);//需要设置成同步提交，同步加载数据，发送请求时，锁住浏览器，需要锁定用户交互操作时使用同步方式。
	}); */
	
		/* $(".btnAjax").click(function() {
			$.get("doAjax.jsp", {
				"name" : "zhangsan",
				"age" : 22,
			}, function(data) {
				$(".msg").empty().append(data);
			})
		}); */
		
		$(".btnAjax").click(function() {
			$.post("doAjax.jsp", {
				"name" : "zhangsan",
				"age" : 22,
			}, function(data) {
				$(".msg").empty().append(data);
			})
		});
	});
</script>
</html>