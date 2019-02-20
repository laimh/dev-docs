# 用户列表

## 获取用户列表

- API 地址：`user/list`
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
		<td>fields</td>
		<td>string</td>
		<td>是</td>
		<td>要查询的字段列表，多个字段以逗号（,）分隔<br>字段请通过 <a href="api-metadata.html">元数据</a> 接口获取</td>
	</tr>
    <tr>
		<td>page_no</td>
		<td>int</td>
		<td>否</td>
		<td>页码，默认 1</td>
	</tr>
    <tr>
		<td>page_size</td>
		<td>int</td>
		<td>否</td>
		<td>页大小，默认 20，最大 200</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "total_size": 200,
  "page_size": 20,
  "page_no": 1,
  "data": [
    { "userId":"xxx", "userName":"老黄", "mobile":"13761679808" },
    { "userId":"xxx", "userName":"老黄", "mobile":"13761679808" }
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
		<td>total_size</td>
		<td>int</td>
		<td>总记录数</td>
	</tr>
	<tr>
		<td>page_size</td>
		<td>int</td>
		<td>查询的页大小</td>
	</tr>
	<tr>
		<td>page_no</td>
		<td>int</td>
		<td>查询的页码</td>
	</tr>
	<tr>
		<td>data</td>
		<td>json(array)</td>
		<td>数据以 数组->键值对 的形式放置在此字段</td>
	</tr>
</tbody>
</table>
