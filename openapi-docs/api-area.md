# 地区数据  <small>3.7</small>

## 获取地区根节点

- API 地址：`area/root`
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
    { "area_id":"017-000000000000000000000000000000000086", "area_name":"中国" }
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
		<td>area_id</td>
		<td>string(40)</td>
		<td>地区唯一 ID</td>
	</tr>
	<tr>
		<td>area_name</td>
		<td>string</td>
		<td>地区名称</td>
	</tr>
</tbody>
</table>

<em>在系统内置的地区数据中，如未启用 <b>国家</b> 字段，则此处返回的是省份列表</em>

## 获取子级地区

- API 地址：`area/subarea`
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
		<td>parent</td>
		<td>string</td>
		<td>是</td>
		<td>父级地区唯一 ID</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": [
    { "area_id":"017-000000000000000000000000000000130000", "area_name":"河北省" },
    { "area_id":"017-000000000000000000000000000000140000", "area_name":"山西省" },
    { "area_id":"017-000000000000000000000000000000150000", "area_name":"内蒙古自治区" }
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
		<td>area_id</td>
		<td>string(40)</td>
		<td>地区唯一 ID</td>
	</tr>
	<tr>
		<td>area_name</td>
		<td>string</td>
		<td>地区名称</td>
	</tr>
</tbody>
</table>

<em>此接口在实际应用中，应首先获取主地区，而后再逐级获取 省 > 市 > 区县</em>