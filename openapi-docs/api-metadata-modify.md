# 元数据修改 <small>4.7 私有</small>

## 修改字段属性

- API 地址：`metadata/field-modify`
- HTTP 方法：POST
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
		<td>field</td>
		<td>string</td>
		<td>是</td>
		<td>字段内部名称</td>
	</tr>
	<tr>
		<td>POST流</td>
		<td>json(map)</td>
		<td>是</td>
		<td>要修改的属性，例如 `{ description: '描述'}`，详情见下表：支持修改的字段属性</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功"
}
</pre>

**支持修改的字段属性**
<table>
<thead>
	<tr>
		<th>名称</th>
		<th>说明</th>
	</tr>
</thead>
<tbody>
  <tr>
		<td>description</td>
		<td>字段说明</td>
	</tr>
</tbody>
</table>