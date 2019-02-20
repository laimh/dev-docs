# 用户登录 #

用于集成第三方登录的接口

## 获取登录令牌

获取登录令牌（Token），然后通过 `user/login` 接口进行登录。

- API 地址：`user/login-token`
- HTTP 方法：GET
- 授权方式：[通用授权](auth-intro.html)

**请求参数**
<table>
<thead>
	<tr>
		<th>参数</th>
		<th>类型</th>
		<th>是否必须</th>
		<th>参数说明</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>user</td>
		<td>string</td>
		<td>是</td>
		<td>用户名</td>
	</tr>
	<tr>
		<td>password</td>
		<td>string</td>
		<td>是</td>
		<td>用户密码，必须使用 MD5 加密</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": {
    "login_token": "xxx",
    "dist_url": "https://365.wisecrm.com/"
  }
}
</pre>

**返回数据说明**
<table>
<thead>
	<tr>
		<th>字段</th>
		<th>类型</th>
		<th>字段说明</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>login_token</td>
		<td>string</td>
		<td>安全登录令牌，有效期 60 秒</td>
	</tr>
	<tr>
		<td>dist_url</td>
		<td>string</td>
		<td>目标登录地址</td>
	</tr>
</tbody>
</table>

## 登录

通过从上一步 `user/login-token` 接口中获取的数据进行拼接，即可实现登录，例如 https://365.wisecrm.com/user/login?token=xxx，其中 https://365.wisecrm.com/ 为 dist_url 字段的值。

- API 地址：`user/login`
- HTTP 方法：GET
- 授权方式：无

**请求参数**
<table>
<thead>
	<tr>
		<th>参数</th>
		<th>类型</th>
		<th>是否必须</th>
		<th>参数说明</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>token</td>
		<td>string</td>
		<td>是</td>
		<td>通过接口 <code>user/login-token</code> 获取的登录令牌</td>
	</tr>
</tbody>
</table>

**返回数据示例**

无

**返回数据说明**

若登录失败（例如 Token 已过期），会重定向到 WiseCRM365 登录页面，并提示相关错误信息。