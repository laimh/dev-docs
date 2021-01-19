# WiseCRM365 钉钉集成

## 1. 注册企业账号

1. 注册过程与常规网站注册相同 https://oa.dingtalk.com/register_new.htm

## 2. 创建企业内部应用及设置

1. 登录钉钉平台 https://www.dingtalk.com/

2. 进入工作台，创建自建应用
   ![](<https://wbs-qncdn.wisecrm.cn/uploader/20210119/31608664732163220.jpg>)

3. 点击应用开发，选择H5微应用，创建应用
   ![](<https://raw.githubusercontent.com/WiseCRM/dev-docs/master/kb-tech/dingtalk/dingtalk2.jpg>)

4. 点击对应的应用，选择开发管理，地址由CRM服务地址与组织id组成,注：图中organizationId为CRM的APPID,可登录CRM系统后台版本信息处查看
   ![](<https://raw.githubusercontent.com/WiseCRM/dev-docs/master/kb-tech/dingtalk/dingtalk3.jpg>)

5. 选择权限管理，添加权限接口，增加待办任务及消息通知，开启后可接收CRM消息推送提醒
   ![](<https://raw.githubusercontent.com/WiseCRM/dev-docs/master/kb-tech/dingtalk/dingtalk4.jpg>)
   
## 3. CRM参数配置

1. 登录CRM后台设置钉钉所需配置，如图
   ![](<https://raw.githubusercontent.com/WiseCRM/dev-docs/master/kb-tech/dingtalk/dingtalk5.jpg>)

2. 对应创建应用上，选择凭证与基础信息，AgentId，AppKey，AppSecret填入CRM
   ![](<https://raw.githubusercontent.com/WiseCRM/dev-docs/master/kb-tech/dingtalk/dingtalk6.jpg>)

3. 钉钉开放平台点击首页，可以查看CorpId，填入CRM
   ![](<https://raw.githubusercontent.com/WiseCRM/dev-docs/master/kb-tech/dingtalk/dingtalk7.jpg>)
   
4. 填写CRM服务地址，开始使用吧
