# 下拉列表数据

## 获取下拉列表数据

- API 地址：`metadata/picklist`
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
		<td>entity</td>
		<td>string</td>
		<td>是</td>
		<td>实体内部名称</td>
	</tr>
    <tr>
		<td>fields</td>
		<td>string</td>
		<td>否</td>
		<td>字段内部名称，不填写则返回实体的所有下拉列表字段值</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": [{
    "field": "typeCode",
    "values": [
      { "value": 0, "label": "正式客户" },
      { "value": 1, "label": "潜在客户" },
      { "value": 2, "label": "合作伙伴" }]
  }]
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
		<td>field</td>
		<td>string</td>
		<td>字段内部名称</td>
	</tr>
    <tr>
		<td>values</td>
		<td>array</td>
		<td>picklis 值列表</td>
	</tr>
    <tr>
		<td>values/value</td>
		<td>int</td>
		<td>picklis 值</td>
	</tr>
    <tr>
		<td>values/label</td>
		<td>string</td>
		<td>picklis 值显示名称</td>
	</tr>
</tbody>
</table>