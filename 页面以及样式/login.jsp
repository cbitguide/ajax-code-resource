<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>用户登录</title>
<link href="./css/logo.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<div class="loginDiv">
		<form action="" method="post">
			<ul class="loginPart">
				<p class="loginTitle">
					<span class="loginTitleSpan">会员登录</span><span class="clearFloat"></span>
				</p>
				<li><input type="text" id="logonUser" class="loginInputStyle"
					placeholder="请输入账号"></li>
				<!-- onblur="checkUserNameExists();" -->
				<li><input type="password" id="code" class="loginInputStyle"
					placeholder="请输入密码"></li>
				<div class="remindP">
					<a href="#" class="forgetA">忘记密码？</a>
				</div>
				<li><input type="button" class="loginBtn" value="登录"
					id="loginBtn"></li>
			</ul>
		</form>
	</div>
</body>
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/logo.js"></script>
</html>