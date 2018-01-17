package com.ajia.ajaxdemo.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;

public class CreateConnection {
	public static Connection getConnectionWithJdbc() throws Exception {
		Properties p = new Properties();
		p.load(DbUtil.class.getResourceAsStream("/jdbc.properties"));
		String driver = p.getProperty("jdbc.driver");
		String url = p.getProperty("jdbc.url");
		String user = p.getProperty("jdbc.username");
		String password = p.getProperty("jdbc.password");
		Class.forName(driver);
		return DriverManager.getConnection(url, user, password);
	}
}
