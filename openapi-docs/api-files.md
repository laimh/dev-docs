# 文件上传与下载  <small>3.8</small>

## 文件上传

- API 地址：`file/upload`
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
		<td>name</td>
		<td>string</td>
		<td>否</td>
		<td>文件名称。若指定此参数将优先使用，否则使用 header 中的文件名称</td>
	</tr>
    <tr>
		<td>POST流</td>
		<td>数据流</td>
		<td>是</td>
		<td>以数据流方式上传文件。文件大小限制 20M</td>
	</tr>
</tbody>
</table>

**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": {
    "file_path": "/xxx/xxx/xxx"
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
		<td>file_path</td>
		<td>string</td>
		<td>上传文件的相对路径</td>
	</tr>
</tbody>
</table>

<em>注意：文件上传后可以通过下面的 file/download-url 接口获取有效下载地址</em>

## 文件下载

- API 地址：`file/download-url`
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
		<td>file_path</td>
		<td>string</td>
		<td>是</td>
		<td>所下载文件的相对路径</td>
	</tr>
    <tr>
		<td>attname</td>
		<td>string</td>
		<td>否</td>
		<td>文件名称</td>
	</tr>
</tbody>
</table>


**返回数据示例**

<pre>
{
  "error_code": 0,
  "error_msg": "调用成功",
  "data": {
    "file_full_path": "https://upimg.goutonghui.com/xxx/xxx/xxx?_=xxx&attname=abc.doc",
    "expires": 300
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
		<td>file_full_path</td>
		<td>string</td>
		<td>下载地址</td>
	</tr>
	<tr>
		<td>expires</td>
		<td>int</td>
		<td>下载地址的有效期（秒），过期无效</td>
	</tr>
</tbody>
</table>