# WiseCRM365 OpenAPI 简介 #

## 简介 ##
WiseCRM365 OpenAPI 是基于 WiseCRM365 的服务接口。客户通过接入和集成 OpenAPI 可以方便、高效地对相关业务或数据进行处理，与其他系统进行业务交互。WiseCRM365 OpenAPI 为已经开通了 OpenAPI 模块的企业用户提供服务。

## 基本调用规则 ##
本文档中列出的所有 API 基础调用 URL 是 `https://www.365.wisecrm.com/gw/` （特别指明的除外）,如 API `user/login-token` 实际请求 URL 为 `https://www.365.wisecrm.com/gw/user/login-token ` 。WiseCRM365 OpenAPI 目前支持 JSON 格式数据，后期将提供 XML 格式数据支持。

OpenAPI URL 规则：`https://www.365.wisecrm.com/gw/[model]/[function]`

通常，对于业务数据的操作主要包含新建、查询（单记录查询、列表查询）、更新、删除，其对应的 `[function]` 如下

<table>
<thead>
	<tr>
		<th>操作</th>
		<th>[function]</th>
		<th>示例</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>新建</td>
		<td>add</td>
		<td><code>account/add</code> 新建客户</td>
	</tr>
	<tr>
		<td>获取单条记录</td>
		<td>get</td>
		<td><code>account/get</code> 查询单条客户记录</td>
	</tr>
	<tr>
		<td>查询列表</td>
		<td>list</td>
		<td><code>account/list</code> 查询客户列表</td>
	</tr>
	<tr>
		<td>修改</td>
		<td>update</td>
		<td><code>account/update</code> 修改客户资料</td>
	</tr>
	<tr>
		<td>删除</td>
		<td>delete</td>
		<td><code>account/delete</code> 删除客户</td>
	</tr>
</tbody>
</table>


## RESTful API ##
WiseCRM365 OpenAPI 采用了 RESTful API 风格，它提供了 HTTP 的请求规范，多数的 API 需采用 POST 方式发送请求，少量的服务类 API 使用 GET 方式获取数据。**请注意，除 API 列举的请求方式外，其他方法都不被支持**。

WiseCRM365 OpenAPI 遵循统一的数据返回格式，例如：

<pre>
{ "error_code":0, "error_msg":"调用成功", "data":xxx }
</pre>

其中 data 为回传的数据，error\_code 为错误码，error\_msg 为错误描述，当 error\_code 值为 0 时表示调用成功，其他值表示失败。总体上可分为以下几类错误码：

- 0 请求成功
- 4XX 请求失败（例如提供了不恰当的参数，具体出错原因，会在 error\_msg 中标注原因）
- 5XX 服务器错误（出现此错误，请联系服务人员）

详情参见 [全局错误码说明](error-code.html)