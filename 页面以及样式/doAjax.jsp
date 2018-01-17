<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	request.setCharacterEncoding("utf-8");
	response.setContentType("text/html;charset=utf-8");

	String name = request.getParameter("name");
	String age = request.getParameter("age");
	out.print("welcome : " + name + ",你好,你今年是 " + age + "岁么?");
%>

