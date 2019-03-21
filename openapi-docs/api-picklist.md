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
		<td>picklist 值列表</td>
	</tr>
  <tr>
		<td>values/value</td>
		<td>int</td>
		<td>picklist 值</td>
	</tr>
  <tr>
		<td>values/label</td>
		<td>string</td>
		<td>picklist 值显示名称</td>
	</tr>
</tbody>
</table>

## 更新或新增下拉列表数据 <small>4.6</small>

- API 地址：`metadata/picklist/edit`
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
		<td>字段内部名称，必须是 picklist 类型字段</td>
	</tr>
	<tr>
		<td>value</td>
		<td>int</td>
		<td>否</td>
		<td>picklist 值。用于匹配已有 picklist 值，匹配到则更新，未填（或未匹配到）则新增</td>
	</tr>
  <tr>
		<td>label</td>
		<td>string</td>
		<td>是</td>
		<td>picklist 值显示名称。注意显示名称不能重复，若存在重复系统会返回错误</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": {
    "field": "typeCode",
    "value": 2,
    "label": "正式客户"
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
		<td>field</td>
		<td>string</td>
		<td>字段内部名称</td>
	</tr>
	<tr>
		<td>value</td>
		<td>int</td>
		<td>picklist 值</td>
	</tr>
  <tr>
		<td>label</td>
		<td>string</td>
		<td>picklist 值显示名称</td>
	</tr>
</tbody>
</table>

## 移除下拉列表数据 <small>4.6</small>

- API 地址：`metadata/picklist/remove`
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
		<td>字段内部名称，必须是 picklist 类型字段</td>
	</tr>
	<tr>
		<td>value</td>
		<td>int</td>
		<td>否</td>
		<td>picklist 值</td>
	</tr>
  <tr>
		<td>label</td>
		<td>string</td>
		<td>否</td>
		<td>picklist 值显示名称。`value` 或 `label` 必须指定一个，用于匹配待移除项</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": {
    "field": "typeCode",
    "value": 2
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
		<td>field</td>
		<td>string</td>
		<td>字段内部名称</td>
	</tr>
	<tr>
		<td>value</td>
		<td>int</td>
		<td>被移除的 picklist 值</td>
	</tr>
</tbody>
</table>
