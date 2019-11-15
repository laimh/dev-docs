# 快递集成

快递集成便于客户在 CRM 中直接下单、打印，及后续物流状态跟踪，提升客户快递效率。整体功能设置较为复杂，一般由售后服务人员代为操作。

## 1. 申请账号

### 菜鸟账号

> 注 1：全程使用菜鸟账号，虽然菜鸟集成了淘宝账号登录，但不要用淘宝账号。

#### 注册菜鸟账号

1. 注册菜鸟账号（注意是菜鸟账号，不要使用淘宝账号），个人或企业账号类型均可 http://login.cainiao.com/register.htm

2. 注册过程与常规网站注册相同，此处省略具体步骤

#### 申请电子面单

1. 使用上一步注册的账号登录菜鸟物流云 https://cloud.cainiao.com

2. 进入【电子面单】开通页进行服务开通（无需审核，可直接开通） https://cloud.cainiao.com/service/serviceDetail.do?serviceId=35
   ![](<https://raw.githubusercontent.com/WiseCRM/dev-docs/master/kb-tech/cn-express/Catch9D6D(11-15-11-43-35).jpg>)

3. 可进入【我的订购】查看开通是否成功 https://cloud.cainiao.com/console2/#/service-management/ordered?_k=1a5z58
   ![](<https://raw.githubusercontent.com/WiseCRM/dev-docs/master/kb-tech/cn-express/Catch1DF0(11-15-11-43-35).jpg>)

### API 配置

1. 进入 https://cloud.cainiao.com/console2/#/service-management/ordered?_k=1a5z58 点击电子面单的【API 配置】
   ![](<https://raw.githubusercontent.com/WiseCRM/dev-docs/master/kb-tech/cn-express/Catch7B2E(11-15-11-43-35).jpg>)

2. 选择一个应用（若无可直接创建一个），然后点击下一步
   ![](<https://raw.githubusercontent.com/WiseCRM/dev-docs/master/kb-tech/cn-express/Catch6694(11-15-11-43-35).jpg>)

3. 进入资源绑定，直接点击下一步
   ![](<https://raw.githubusercontent.com/WiseCRM/dev-docs/master/kb-tech/cn-express/Catch4AAB(11-15-11-43-35).jpg>)

4. 进入参数配置，将所有订阅 API 的报文格式改为 xml
   ![](<https://raw.githubusercontent.com/WiseCRM/dev-docs/master/kb-tech/cn-express/CatchEC91(11-15-11-43-35).jpg>)

5. 全部修改并保存后点击页面最下方的【保存并提交】即可

### 授权 WiseCRM 访问

1. 进入 CRM 系统设置【快递设置】，点击【菜鸟授权-开始授权】
   ![](<https://raw.githubusercontent.com/WiseCRM/dev-docs/master/kb-tech/cn-express/Catch5939(11-15-11-43-35).jpg>)

2. 点击【下一步】并确认授权，确认后系统会跳转回 CRM 页面，此时授权完成（注意，由于菜鸟系统限制，授权后可能要等待 10 分钟左右才能生效）

### 同步订购关系（可选操作）

1. 订购关系是指与快递公司签订的在线下单协议，例如需要使用圆通的快递，则需要与圆通建立订购关系（具体操作将在其他篇章介绍）

2. 授权后可在 CRM 系统设置【快递设置】，点击【菜鸟授权-同步地址】进行同步

3. 同步后在发货时就能选择相应的快递公司进行发货了
