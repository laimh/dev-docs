# 部门列表

## 获取部门列表

- API 地址：`user/bizunit-tree`
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
    { "businessUnitId":"xxx", "name":"研发部", "parentBusinessUnitId":null },
    { "businessUnitId":"xxx", "name":"销售部", "parentBusinessUnitId":"xxx" }
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
</tbody>
</table>