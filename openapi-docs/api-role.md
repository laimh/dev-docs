# 角色列表

## 获取角色列表

- API 地址：`user/privileges-tree`
- HTTP 方法：GET
- 授权方式：[通用授权](auth-intro.html)

**请求参数**

无

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": [
    { "roleId":"xxx", "name":"研发", "privileges_tree":"" },
    { "roleId":"xxx", "name":"客户经理", "privileges_tree":"" }
  ]
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
		<td>data</td>
		<td>json(array)</td>
		<td>数据以 数组->键值对 的形式放置在此字段</td>
	</tr>
    <tr>
		<td>data/privileges_tree</td>
		<td>json</td>
		<td>权限集</td>
	</tr>
</tbody>
</table>