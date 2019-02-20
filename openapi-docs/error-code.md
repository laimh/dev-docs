# 全局错误码说明

## 错误码返回格式

对于 API 调用有两类返回结果，失败或成功。

调用成功：
<pre>{ "error\_code":0, "error\_msg":"调用成功", "data":xxx }</pre>

调用失败：
<pre>{ "error\_code":402, "error\_msg":"参数 op_user 不能为空" }</pre>

可以看出 `error_code` 为标识调用成功与否的重要返回值，当 `error_code` 值为 0 时说明调用成功（在返回结果中同时还包括有其他业务数据字段），而当 `error_code` 值大于 0 的时候则说明调用失败，同时 `error_msg` 会对错误进行描述，便于获知具体失败原因。

## 全局错误码

<table>
<thead>
	<tr>
		<th>错误码</th>
		<th>错误说明</th>
		<th>解决方案</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>400</td>
		<td>业务失败</td>
		<td>检查 API 请求参数</td>
	</tr>
    <tr>
		<td>401</td>
		<td>参数（格式）无效</td>
		<td>检查传入参数是否有误，例如要求为数字的字段传入了日期值</td>
	</tr>
    <tr>
		<td>402</td>
		<td>参数不能为空</td>
		<td>检查是否已经传入了所有要求为非空的参数</td>
	</tr>
    <tr>
		<td>403</td>
		<td>不被支持的操作</td>
		<td>指定 API 可能未被开放，或没有此 API 调用权限</td>
	</tr>
    <tr>
		<td>410</td>
		<td>权限不足</td>
		<td>确认操作用户（op_user）对指定记录是否有相应的权限</td>
	</tr>
    <tr>
		<td>490</td>
		<td>未开通 OpenAPI</td>
		<td>联系服务人员开通 OpenAPI 模块</td>
	</tr>
    <tr>
		<td>491</td>
		<td>请求超限</td>
		<td>超出 OpenAPI 所允许的最大调用频率/次数，请优化功能减少 API 调用，或联系服务人员增加 API 调用次数</td>
	</tr>
	<tr>
		<td>500</td>
		<td>系统错误</td>
		<td>请联系服务人员</td>
	</tr>
</tbody>
</table>