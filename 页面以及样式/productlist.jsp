<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>商品列表</title>
<link href="./css/sweetalert.css" type="text/css" rel="stylesheet" />
<style type="text/css">
.pagetionUL {
	display: inline-block;
	padding-left: 0;
	margin: 20px 0;
	border-radius: 4px
}

.pagetionUL li {
	list-style: none !important;
	display: inline;
	width: 40px;
}

.pagetionUL>li>a, .pagetionUL>li>span {
	position: relative;
	float: left;
	padding: 6px 12px;
	margin-left: -1px;
	line-height: 1.42857143;
	color: #337ab7;
	text-decoration: none;
	background-color: #fff;
	border: 1px solid #ddd
}

.container {
	width: 1180px;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
}

#customerList {
	/* margin-top: 40px; */
	margin: 40px auto;
}

#customerList p {
	text-align: center;
	font: bold 26px arial, sans-serif;
	color: #DC143C;
}

.table {
	width: 100%;
	margin: 0 auto;
	padding: 10px 10px;
	text-align: center;
}

.table-bordered {
	border: 1px solid #ddd
}

.table td, .table th {
	background-color: #fff !important
}

.active {
	background-color: #ccc;
}

.container .addproduct {
	margin: 10px auto;
	border-collapse: separates;
	border-spacing: 0px 10px;
}

.container .addproduct tr {
	height: 10px;
}

.container .addproduct tr:last-child td:last-child .addBtn {
	margin-left: 10px;
}

.container .addproduct .loginInputStyle {
	width: 268px;
	height: 46px;
	line-height: 46px;
	font-size: 14px;
	color: #333333;
	text-indent: 16px;
	border: 1px solid #c8c8c8;
	margin-left: 10px;
}

.container .addproduct .btn {
	width: 100px;
	height: 44px;
	color: #ffffff;
	font-size: 14px;
	text-align: center;
	cursor: pointer;
	border: 0;
}

.container .addproduct .addBtn {
	background: #00a5f0;
}

.container .addproduct .updateBtn {
	background: #EE1289;
}

.productOpeartorBtn {
	width: 100px;
	height: 40px;
	color: #ffffff;
	font-size: 14px;
	text-align: center;
	cursor: pointer;
	border: 0;
	background: #00a5f0;
}

.selProductType {
	color: #999999;
	font-size: 12px;
	width: 268px;
	height: 46px;
	margin-left: 10px;
}
</style>
</head>
<body>
	<!-- 商品列表 -->
	<div class="container">
		<div id="customerList">
			<p>一个页面的增删改查</p>
			<table class="table table-bordered">
				<tr class="active">
					<th>商品编号</th>
					<th>商品名称</th>
					<th>商品价格</th>
					<th>商品类型</th>
					<th>添加时间</th>
					<th>操作</th>
				</tr>
				<%-- <tr>
					<td>a</td>
					<td>a</td>
					<td>a</td>
					<td>a</td>
					<td>a</td>
					<td><input class="giveupStyle btn btn-info" type="button"
						value="编辑"
						onclick="javascript:cancelenrool(${row.id},${row.oldcustomerstate });">
						<input class="giveupStyle btn btn-warning" type="button"
						value="删除" onclick="javascript:gendan(${row.id});"></td>
				</tr>
				<tr class="main_info">
					<td colspan="11">没有相关数据</td>
				</tr> --%>
			</table>
			<!-- <div>
				<p>
				<ul class="">
					<li><a href="#">首页</a></li>
					<li><a href="#">上一页</a></li>
					<li><span>/ </span></li>
					<li><a href="#">下一页</a></li>
					<li><a href="#">尾页</a></li>
				</ul>
				</p>
			</div> -->
		</div>
		<!-- 添加商品 -->
		<table class="addproduct">
			<input type="hidden" id="productId" name="productId" />
			<tr>
				<th>商品名称</th>
				<td><input type="text" name="productName" id="productName"
					class="loginInputStyle" /></td>
			</tr>
			<tr>
				<th>商品价格</th>
				<td><input type="text" name="productPrice" id="productPrice"
					class="loginInputStyle" /></td>
			</tr>
			<tr>
				<th>商品类型</th>
				<td><select name="productType" id="productType"
					class="selProductType">
						<option value="0">请选择</option>
				</select></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="button" name="add" value="增加"
					class="btn addBtn" /> <input type="button" name="update"
					value="修改" class="btn updateBtn" /></td>
			</tr>
		</table>
	</div>
</body>
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/productlist.js"></script>
<script type="text/javascript" src="js/sweetalert.min.js"></script>
</html>