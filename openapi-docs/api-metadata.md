# 元数据

## 获取实体列表

- API 地址：`metadata/entity`
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
		<td>type</td>
		<td>int</td>
		<td>否</td>
		<td>实体类型，默认为 0 返回全部，0 = 全部，1 = 系统实体，2 = 自定义实体</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": [{
    "code" 2,
    "entity": "Account",
    "name": "客户",
    "type": 1,
    "name_field": "accountName"
  }, {
    "code": 3,
    "entity": "Contact",
    "name": "联系人",
    "type": 1,
    "name_field": "contactName"
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
		<td>code</td>
		<td>int(3)</td>
		<td>实体代码，如客户的实体代码为 2</td>
	</tr>
	<tr>
		<td>entity</td>
		<td>string</td>
		<td>实体的内部名称</td>
	</tr>
    <tr>
		<td>name</td>
		<td>string</td>
		<td>实体的显示名称</td>
	</tr>
    <tr>
		<td>type</td>
		<td>int</td>
		<td>实体类型，1 = 系统实体，2 = 自定义实体</td>
	</tr>
	<tr>
		<td>name_field</td>
		<td>string</td>
		<td>主显字段</td>
	</tr>
</tbody>
</table>

## 获取实体字段列表

- API 地址：`metadata/field`
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
		<td>type</td>
		<td>int</td>
		<td>否</td>
		<td>字段类型，默认为 0 返回全部，0 = 全部，1 = 系统字段，2 = 自定义字段</td>
	</tr>
    <tr>
		<td>entity</td>
		<td>string</td>
		<td>是</td>
		<td>实体内部名称，即要获取哪个实体的字段</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": [{
    "field": "accountName",
    "name": "客户名称",
    "type": 1,
    "data_type": "string",
    "nullable": false,
    "creatable": true,
    "updatable": true
  }, {
    "field": "owning_user",
    "name": "所属用户",
    "type": 1,
    "data_type": "reference",
    "reference_to": "User",
    "nullable": false,
    "creatable": true,
    "updatable": true
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
		<td>entity</td>
		<td>string</td>
		<td>实体内部名称</td>
	</tr>
    <tr>
		<td>name</td>
		<td>string</td>
		<td>实体显示名称</td>
	</tr>
    <tr>
		<td>type</td>
		<td>int</td>
		<td>实体类型，1 = 系统实体，2 = 自定义实体</td>
	</tr>
    <tr>
		<td>data_type</td>
		<td>string</td>
		<td>字段的数据类型</td>
	</tr>
    <tr>
		<td>nullable</td>
		<td>boolean</td>
		<td>是否允许为空值</td>
	</tr>
    <tr>
		<td>creatable</td>
		<td>boolean</td>
		<td>是否可以在创建时指定值（不可创建的值通常用于自动填充类字段，例如记录ID应该由系统自动生成而非自己指定）</td>
	</tr>
    <tr>
		<td>updatable</td>
		<td>boolean</td>
		<td>是否可以更新此字段的值。注意：在使用 <code>*/update</code> 接口时，如传入此类字段将会被忽略</td>
	</tr>
    <tr>
		<td>reference_to</td>
		<td>string</td>
		<td>仅在数据类型为 reference 时有效，意为此字段关联的实体</td>
	</tr>
</tbody>
</table>

## 工具

我们编写了一个 <a href="apitest.html">元数据获取工具</a>，你可以直接使用。