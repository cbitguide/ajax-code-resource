$(function() {
	listAll(1, 1);

	$(".addBtn").click(addProduct);

	// $("#editProduct").click(editProduct);

	$(".updateBtn").click(updateProduct);

})

function listAll(type, currentPage) {
	$.post("ProductServlet", {
		"cmd" : 1,
		"currentPage" : currentPage
	}, function(data) {
		// console.log(data);
		// console.log(data.productList);
		appendProduct(data);
		if (type == 1) {
			$.each(data.rowsObject.productTypeList, function(i, v) {
				console.log(v);
				var option = $("<option value='" + v.id + "'>" + v.typename
						+ "</option>");
				$(".container .addproduct .selProductType").append(option);
			});
		}
	});
}

function appendProduct(data) {
	console.log(data.rowsObject.productList)
	$(".container #customerList table tr:gt(0)").remove();
	$
			.each(
					data.rowsObject.productList,
					function(i, v) {
						var tdId = $("<td>" + v.id + "</td>");
						var tdPName = $("<td>" + v.pname + "</td>");
						var tdPrice = $("<td>" + v.price + "</td>");
						var tdTypeName = $("<td>" + v.pt.typename + "</td>");
						var tdInsertdatetime = $("<td>" + v.insertdatetime
								+ "</td>");
						var pname = '"' + v.pname + '"';// '"'++'"'
						var tdOperator = $("<td><input type='button' value='编辑' id='editProduct' class='productOpeartorBtn' onclick='editProduct("
								+ v.id
								+ ","
								+ pname
								+ ","
								+ v.price
								+ ","
								+ v.pt.id
								+ ")'/>&nbsp;<input type='button' value='删除' class='productOpeartorBtn' onclick='deleteProduct("
								+ v.id + ")'/></td>");

						var tr = $("<tr></tr>");
						tr.append(tdId);
						tr.append(tdPName);
						tr.append(tdPrice);
						tr.append(tdTypeName);
						tr.append(tdInsertdatetime);
						tr.append(tdOperator);

						$(".container #customerList table").append(tr);
					});

	$(".container #customerList #pagetionDiv").remove();
	var pagetionDiv = $("<div id='pagetionDiv' class='table'><ul class='pagetionUL'><li><input type='hidden' name='currentPageHidden' id='currentPageHidden' value='"
			+ data.currentPage
			+ "'/><a href='javascript:toFirstPage()'>首页</a></li><li><a href='javascript:prev("
			+ data.currentPage
			+ ","
			+ data.pageCount
			+ ")'>上一页</a></li><li><span>"
			+ data.currentPage
			+ "/"
			+ data.pageCount
			+ "</span></li><li><a href='javascript:next("
			+ data.currentPage
			+ ","
			+ data.pageCount
			+ ");'>下一页</a></li><li><a href='javascript:toEndPage("
			+ data.pageCount + ")'>尾页</a></li></ul></div>");
	$(".container #customerList").append(pagetionDiv);
}

function addProduct() {
	var productName = $(".addproduct #productName").val();
	var productPrice = $(".addproduct #productPrice").val();
	var productType = $(".addproduct #productType option:selected").val();

	var currentPage = $("#currentPageHidden").val();

	console.log(productName);
	console.log(productPrice);
	console.log(productType);

	// 非空验证,合法性验证
	// ...............

	var params = {
		"cmd" : 2,
		"productName" : productName,
		"productPrice" : productPrice,
		"productType" : productType
	};
	$.post("ProductServlet", params, function(data) {
		console.log(data);
		if (data == 1) {
			swal({
				title : "增加商品成功!",
				text : "将在三秒钟自动关闭",
				showConfirmButton : false,
				timer : 3000
			})
			$(".addproduct #productId").val("");
			listAll(2, currentPage);
		} else {
			alert("增加失败!")
		}
	});

}

function editProduct(id, productName, productPrice, productTypeId) {
	console.log(id);
	$(".addproduct #productId").val(id);
	$(".addproduct #productName").val(productName);
	$(".addproduct #productPrice").val(productPrice);
	$(".addproduct #productType").val(productTypeId);
}

function updateProduct() {
	var productId = $(".addproduct #productId").val();
	var productName = $(".addproduct #productName").val();
	var productPrice = $(".addproduct #productPrice").val();
	var productType = $(".addproduct #productType option:selected").val();

	var currentPage = $("#currentPageHidden").val();

	if (productId == "" || productId == null) {
		alert("请先选择编辑商品按钮!")
	} else {
		// 非空验证，合法性验证
		// ...................

		var params = {
			"cmd" : 3,
			"productId" : productId,
			"productName" : productName,
			"productPrice" : productPrice,
			"productType" : productType
		};
		$.post("ProductServlet", params, function(data) {
			console.log(data);
			if (data == 1) {
				swal({
					title : "修改商品成功!",
					text : "将在三秒钟自动关闭",
					showConfirmButton : false,
					timer : 3000
				})
				listAll(3, currentPage);
			} else {
				alert("修改失败!")
			}
		});
	}
}

function deleteProduct(id) {
	var currentPage = $("#currentPageHidden").val();

	swal({
		title : "您确定要删除id=" + id + "的数据么?",
		text : "删除本条商品信息!",
		type : "warning",
		showCancelButton : true,
		confirmButtonColor : "#DD6B55",
		confirmButtonText : "是, 我确定!"
	}, function() {
		$.post("ProductServlet", {
			"cmd" : 4,
			"pid" : id
		}, function(data) {
			console.log(data);
			if (data == 1) {
				listAll(4, currentPage);
			} else {
				alert("删除失败!")
			}
		});
	});
}

function next(currentPage, pageCount) {
	// var currentPage = $(".currentPage").val();
	currentPage = currentPage + 1;
	if (currentPage >= pageCount) {
		currentPage = pageCount;
	}
	$.post("ProductServlet", {
		"cmd" : 1,
		"currentPage" : currentPage
	}, function(data) {
		// alert(data);
		appendProduct(data);
	});
}

function prev(currentPage, pageCount) {
	// var currentPage = $(".currentPage").val();
	currentPage = currentPage - 1;
	if (currentPage <= 0) {
		currentPage = 1;
	}
	$.post("ProductServlet", {
		"cmd" : 1,
		"currentPage" : currentPage
	}, function(data) {
		// alert(data);
		appendProduct(data);
	});
}

function toFirstPage() {
	$.post("ProductServlet", {
		"cmd" : 1,
		"currentPage" : 1
	}, function(data) {
		// alert(data);
		appendProduct(data);
	});
}

function toEndPage(pageCount) {
	// var currentPage = $(".currentPage").val();
	$.post("ProductServlet", {
		"cmd" : 1,
		"currentPage" : pageCount
	}, function(data) {
		// alert(data);
		appendProduct(data);
	});
}