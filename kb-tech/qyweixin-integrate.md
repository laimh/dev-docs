# WiseCRM365 企业微信集成

## 1. 注册/登录企业账号

1. 注册过程与常规网站注册相同 https://work.weixin.qq.com

## 2. 创建企业内部应用及设置

1. 登录企业微信管理平台

2. 进入应用管理，创建自建应用
   ![](https://wbs-qncdn.wisecrm.cn/uploader/20210203/32915505984124724.jpg>)
   
3. 创建完成后，需设置如图以下功能
   ![](<https://wbs-qncdn.wisecrm.cn/uploader/20210203/32915531100507629.jpg>)

4. 设置工作台应用主页，地址(必须为域名)由CRM服务地址与组织id组成,(例：https://365.wisecrm.com/weixin/oauth?organizationId=xxx)
    注：organizationId为CRM的APPID,可登录CRM系统后台版本信息处查看

5. 设置自定义菜单栏，同设置工作台应用主页地址一致，也可设置多个菜单调整到其它地址
   ![](<https://wbs-qncdn.wisecrm.cn/uploader/20210203/32915549770212821.jpg>)
   
6. 设置网页授权及JS-SDK，配置OAuth2.0网页授权功能的回调域名
   ![](<https://wbs-qncdn.wisecrm.cn/uploader/20210203/32915554293711195.jpg>)
   
## 3. CRM参数配置

1. 登录CRM后台设置企业微信所需配置，如图
   ![](<https://wbs-qncdn.wisecrm.cn/uploader/20210203/32915557890454059.jpg>)

2. 选择刚自建的应用，AgentId，Secret填入CRM
   ![](<https://wbs-qncdn.wisecrm.cn/uploader/20210203/32915562225794812.jpg>)

3. 切换到我的企业，企业ID填入CRM
   ![](<https://wbs-qncdn.wisecrm.cn/uploader/20210203/32915565617753818.jpg>)
   
4. 完成
