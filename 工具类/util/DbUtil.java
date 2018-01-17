package com.ajia.ajaxdemo.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

public class DbUtil {
	private ThreadLocal<Connection> tl = new ThreadLocal<Connection>();
	protected Connection conn;
	protected PreparedStatement pstmt;
	protected ResultSet rs;

	/**
	 * 获取连接
	 * 
	 * @return
	 * @throws Exception
	 */
	public Connection getConn() throws Exception {
		conn = tl.get();
		if (conn == null) {
			conn = CreateConnection.getConnectionWithJdbc();
			tl.set(conn);
		}
		return conn;
	}

	/**
	 * 通用的查询方法
	 * 
	 * @param sql
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public List query(String sql, Object... param) throws Exception {
		List<LinkedHashMap<String, Object>> list = new ArrayList<LinkedHashMap<String, Object>>();
		conn = this.getConn();
		pstmt = conn.prepareStatement(sql);
		if (param != null) {
			for (int i = 0; i < param.length; i++) {
				pstmt.setObject(i + 1, param[i]);
			}
		}
		rs = pstmt.executeQuery();

		int columnCount = rs.getMetaData().getColumnCount();
		System.out.println(columnCount);
		while (rs.next()) {// 获取所有行
			LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
			for (int i = 0; i < columnCount; i++) { // 获取每一个列
				String columnName = rs.getMetaData().getColumnName(i + 1);
				String columnValue = rs.getString(i + 1);
				System.out.println(columnName + " : " + columnValue);
				map.put(columnName, columnValue);
			}
			list.add(map);
			System.out.println("============================================");
		}
		return list;
	}

	public Integer queryCount(String sql, Object... param) throws Exception {
		Integer result = 0;
		conn = this.getConn();
		pstmt = conn.prepareStatement(sql);
		if (param != null) {
			for (int i = 0; i < param.length; i++) {
				pstmt.setObject(i + 1, param[i]);
			}
		}
		rs = pstmt.executeQuery();
		if (rs != null) {
			while (rs.next()) {// 获取所有行
				result = rs.getInt(1);
			}
		}
		return result;
	}

	/**
	 * 通用的增删改的方法
	 * 
	 * @param sql
	 * @param param
	 * @return
	 */
	public int update(String sql, Object... param) {
		int result = 0;
		try {
			conn = this.getConn();
			pstmt = conn.prepareStatement(sql);
			if (param != null) {
				for (int i = 0; i < param.length; i++) {
					pstmt.setObject(i + 1, param[i]);
				}
			}
			result = pstmt.executeUpdate();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return result;
	}

	/**
	 * 关闭连接
	 * 
	 * @param conn
	 * @param pstmt
	 * @param rs
	 */
	public void closeAll() {// Connection conn, PreparedStatement pstmt, ResultSet rs
		try {
			conn = tl.get();
			if (rs != null) {
				rs.close();
			}
			if (pstmt != null) {
				pstmt.close();
			}
			if (conn != null && !conn.isClosed()) {
				conn.close();
			}
			tl.set(null);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public static void main(String[] args) {
		DbUtil dbUtil = new DbUtil();
		// try {
		// List list = dbUtil.query(
		// "select user.*,dept.deptName,dept.deptDesc from tbl_user user,tbl_dept dept
		// where user.deptId=dept.deptId order by user.userId",
		// null);
		// } catch (Exception e) {
		// // TODO Auto-generated catch block
		// e.printStackTrace();
		// }
	}
}