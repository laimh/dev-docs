# 分类数据 <small>3.7</small>

## 获取分类类型

- API 地址：`subject/type`
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
    { "type_no":"hangye", "type_name":"行业" },
    { "type_no":"chanpin", "type_name":"产品线" }
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
		<td>type_no</td>
		<td>string</td>
		<td>分类类型唯一标识</td>
	</tr>
	<tr>
		<td>type_name</td>
		<td>string</td>
		<td>分类类型名称</td>
	</tr>
</tbody>
</table>

## 获取分类数据

- API 地址：`subject/data`
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
		<td>type_no</td>
		<td>string</td>
		<td>是</td>
		<td>分类类型唯一标识</td>
	</tr>
	<tr>
		<td>parent</td>
		<td>string(40)</td>
		<td>否</td>
		<td>父级分类 ID （在 WiseCRM365 中支持定义多级分类）</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": [
    { "subject_id":"016-000000000000000000000000000000000000", "subject_name":"计算机/IT/信息技术" },
    { "subject_id":"016-000000000000000000000000000000000001", "subject_name":"金融/证券/保险" }
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
		<td>subject_id</td>
		<td>string(40)</td>
		<td>分类唯一 ID</td>
	</tr>
	<tr>
		<td>subject_name</td>
		<td>string</td>
		<td>分类名称</td>
	</tr>
</tbody>
</table>