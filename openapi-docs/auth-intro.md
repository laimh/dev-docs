# OpenAPI 授权与验证机制 #

## 概览 ##
传统 API 而言，授权与验证机制一直是被高度重视的安全问题之一，API 安全一直是被开发者们所讨论。WiseCRM365 OpenAPI 在设计之初便已将 API 安全问题融入到我们的 DNA 中。

OpenAPI 有两种验证方式：密匙明文验证模式和数字签名验证模式，选择一种适合你生产环境的验证机制。

### 授权参数
<table>
<thead>
	<tr>
		<th>参数</th>
		<th>说明</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>appid</td>
		<td>APP ID（从 WiseCRM365 中获取）</td>
	</tr>
    <tr>
		<td>appkey</td>
		<td>应用密匙（从 WiseCRM365 中获取）</td>
	</tr>
    <tr>
		<td>sign_type</td>
		<td>签名算法，可选值 MD5 或 SHA1</td>
	</tr>
    <tr>
		<td>timestamp</td>
		<td>时间戳（毫秒级）</td>
	</tr>
    <tr>
		<td>sign</td>
		<td>签名字符串</td>
	</tr>
</tbody>
</table>

## 密匙明文验证模式 ##
明文的密匙验证模式，这种验证方式在集成接入过程中非常高效，但我们不建议在生成环境中使用此方式。

要使用密匙明文验证模式，请在 sign 参数中提交你的应用密匙。

*使用密匙明文验证模式时，请忽略 timestamp 和 sign_type 参数*

## 数字签名验证模式 ##
数字签名验证模式，适用于安全要求较高的应用。

### 数字签名方法与规则 ###
1. 将所有提交的参数升序排列：仅单次提交的参数，不包括 sign 字段升序（a-z）排列
2. 创建签名字符串：以 `"key=value"  + "&" + "key=value"` 的方式连接所有参数（为空的参数不需要参与签名）。此签名字符串类似与  HTTP GET/POST 请求时的字符串
3. 创建签名：在创建的签名字符串后加上 `"&" + "appkey=APPKEY"` 拼接签名字符串，然后使用 `md5(string)` 或 `sha1(string)` 创建签名

*要使用数字签名验证模式，请将 sign_type 参数设为 md5 或 sha1 , 然后将 sign 参数设为你计算的签名字符串*

## Timestamp UNIX 时间戳 ##
如果你使用数字签名方式，你需要在每条 API 请求中加入 timestamp UNIX 时间戳，且此参数将必须被包含在签名字符串中，参与计算签名。

UNIX 时间戳是安全 API 请求中非常重要的概念，在 API 请求或签名被创建之前，你需要保证 API 请求端时间与WiseCRM365 OpenAPI 服务器时间同步（与 [国家授时中心](http://www.time.ac.cn) 时间一致），并确保请求 UNIX 时间戳至发送请求的过程小于 30 秒，否则将导致 timestamp 参数验证失败。

## 示例 ##
作为参考，我们提供了一个 Java 版本的调用示例 <a target="_blank" href="http://wbs-qncdn.qidapp.cn/uploader/20160715/34999814477287830.zip">点击下载</a>
