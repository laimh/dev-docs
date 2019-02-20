# 关系人管理

## 新增关系人

- API 地址：`privy/add`
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
		<td>op_user</td>
		<td>string(40)</td>
		<td>是</td>
		<td>操作用户ID。可通过 <a href="api-user.html">用户列表</a> 接口获取</td>
	</tr>
	<tr>
		<td>POST流</td>
		<td>json(map)</td>
		<td>是</td>
		<td>POST 方法提交的流数据，字段与值的键值对，例如 <code>{ "privyName":"刘经理" }</code><br>字段可通过 <a href="api-metadata.html">元数据</a> 接口获取</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": {
    "privy_id": "xxx"
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
		<td>privy_id</td>
		<td>string(40)</td>
		<td>新增关系人的唯一ID，为 40 位 hash 字符串</td>
	</tr>
</tbody>
</table>

## 获取单条关系人

- API 地址：`privy/get`
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
		<td>op_user</td>
		<td>string(40)</td>
		<td>是</td>
		<td>操作用户ID。可通过 <a href="api-user.html">用户列表</a> 接口获取</td>
	</tr>
	<tr>
		<td>privy_id</td>
		<td>string(40)</td>
		<td>是</td>
		<td>要获取的关系人ID</td>
	</tr>
	<tr>
		<td>fields</td>
		<td>string</td>
		<td>是</td>
		<td>要获取的字段列表，多个字段以逗号（,）分隔<br>字段可通过 <a href="api-metadata.html">元数据</a> 接口获取</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": {
    "privyName": "刘经理",
    "itemRole": 8
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
		<td>data</td>
		<td>json(map)</td>
		<td>数据以键值对的形式放置在此字段</td>
	</tr>
</tbody>
</table>

## 查询关系人列表

- API 地址：`privy/list`
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
		<td>op_user</td>
		<td>string(40)</td>
		<td>是</td>
		<td>操作用户。可通过 <a href="api-user.html">用户列表</a> 接口获取</td>
	</tr>
	<tr>
		<td>fields</td>
		<td>string</td>
		<td>是</td>
		<td>要查询的字段列表，多个字段以逗号（,）分隔<br>字段请通过 <a href="api-metadata.html">元数据</a> 接口获取</td>
	</tr>
	<tr>
		<td>qname</td>
		<td>string</td>
		<td>否</td>
		<td>查询主显字段（name_field），支持使用星号模糊匹配，如 <code>*企能软件</code> 将查询以企能软件结尾的关系人。如需更复杂的查询请参考 <a href="api-advquery.html">高级查询接口</a></td>
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

<em>此接口暂不支持排序参数，默认顺序为记录创建时间由近到远，如需使用排序请参考 <a href="api-advquery.html">高级查询接口</a></em>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "total_size": 10000,
  "page_size": 20,
  "page_no": 1,
  "data": [
    { "privyId": "xxx", "privyName": "刘经理", "itemRole": 8 },
    { "privyId": "xxx", "privyName": "刘经理", "itemRole": 8 }
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

## 修改关系人

- API 地址：`privy/update`
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
		<td>op_user</td>
		<td>string(40)</td>
		<td>是</td>
		<td>操作用户ID。可通过 <a href="api-user.html">用户列表</a> 接口获取</td>
	</tr>
	<tr>
		<td>privy_id</td>
		<td>string(40)</td>
		<td>是</td>
		<td>要修改的关系人ID</td>
	</tr>
	<tr>
		<td>POST流</td>
		<td>json(map)</td>
		<td>是</td>
		<td>POST 方法提交的流数据，字段与值的键值对，例如 <code>{ "privyName":"刘经理" }</code><br>字段请通过 <a href="api-metadata.html">元数据</a> 接口获取</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": {
    "privy_id": "xxx"
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
		<td>privy_id</td>
		<td>string(40)</td>
		<td>被修改的关系人ID</td>
	</tr>
</tbody>
</table>

## 删除关系人

- API 地址：`privy/delete`
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
		<td>op_user</td>
		<td>string(40)</td>
		<td>是</td>
		<td>操作用户ID。可通过 <a href="api-user.html">用户列表</a> 接口获取</td>
	</tr>
	<tr>
		<td>privy_id</td>
		<td>string(40)</td>
		<td>是</td>
		<td>要删除的关系人ID</td>
	</tr>
	<tr>
		<td>cascade_delete</td>
		<td>string</td>
		<td>否</td>
		<td>级联删除选项，详情参照 <a href="warning.html">级联删除</a></td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": {
    "privy_id": "xxx"
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
		<td>privy_id</td>
		<td>string(40)</td>
		<td>被删除的关系人ID</td>
	</tr>
</tbody>
</table>