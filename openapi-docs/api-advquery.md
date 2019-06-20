# 高级查询  <small>3.8</small>

## 接口规范

- API 地址：`entity/adv-query`
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
		<td>模块内部名称，如 <code>Account</code>，可通过 <a href="api-metadata.html">元数据</a> 接口获取</td>
	</tr>
	<tr>
		<td>fields</td>
		<td>string</td>
		<td>是</td>
		<td>要查询的字段列表，多个字段以逗号（,）分隔<br>字段请通过 <a href="api-metadata.html">元数据</a> 接口获取</td>
	</tr>
	<tr>
		<td>POST流</td>
		<td>json(map)</td>
		<td>是</td>
		<td>查询条件 filter</td>
	</tr>
	<tr>
		<td>sort</td>
		<td>string</td>
		<td>是</td>
		<td>排序，格式为 `fieldName[:asc|desc]`，支持多个字段排序，多个字段以逗号（,）分隔 <small>4.6</small></td>
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

## filter 参数说明

首先来看一个典型的 filter 数据格式样例

<pre>
{
  "type": "OR",
  "filters": [
    { "fieldName":"phone", "operator":"cl", "value":"021" },
    { "fieldName":"address", "operator":"cl", "value":"上海" }
  ]
}
</pre>

可以看出，这是一个标准的 JSON 格式数据，由两个主要属性节点构成，即 <code>type</code> 和 <code>filters</code>。

- <code>type</code> 取值范围为 <code>OR | AND</code>，即标识以何种逻辑运算拼接 <code>filters</code> 中的内容
- <code>filters</code> 具体的查询条件（数组）

在 <code>filters</code> 节点内，可以包含多个查询条件（最大支持10个），查询条件属性的具体含义如下。

- <code>fieldName</code> 查询字段
- <code>operator</code> 操作符，如大于、小于、包含等
- <code>value</code> 查询值

### operator 的可选值

<table>
<thead>
	<tr>
		<th>值</th>
		<th>说明</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>=</td>
		<td>等于</td>
	</tr>
	<tr>
		<td>&lt;&gt;</td>
		<td>不等于</td>
	</tr>
	<tr>
		<td>&gt;</td>
		<td>大于</td>
	</tr>
	<tr>
		<td>&lt;</td>
		<td>小于</td>
	</tr>
	<tr>
		<td>cl</td>
		<td>包含</td>
	</tr>
	<tr>
		<td>nc</td>
		<td>不包含</td>
	</tr>
	<tr>
		<td>$NULL$</td>
		<td>为空</td>
	</tr>
	<tr>
		<td>$NOT_NULL$</td>
		<td>不为空</td>
	</tr>
</tbody>
</table>