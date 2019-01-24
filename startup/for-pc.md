## 系统环境要求

> 如无特殊说明，以下软件建议使用最新版本

- [ ] JDK 1.8
- [ ] Eclipse for Enterprise Java Developers
- [ ] [Eclipse 插件安装](https://github.com/orgs/WiseCRM/teams/wisecrm/discussions/3)
- [ ] VSCode
- [ ] Tomcat 8.0+
- [ ] Maven 3.5+
- [ ] Nodejs（建议安装）
- [ ] GitHub Desktop

## 导入项目

1. 通过 `git clone` 或 GitHub Desktop 签出代码
2. 用 Eclipse 导入为 Maven 工程
3. 然后将 `.eclipse/` 内的文件复制到项目目录下

## 项目主要目录结构

| 目录 | 说明 |
| --- | --- |
| .deps | 本地依赖包 |
| .eclipse | Eclipse 配置文件（强制使用） |
| /src | 源码根目录 |
| /src/customization | 客户定制代码 |
| /src/test | 测试用例 |
| /src/main/webapp | 页面及静态资源 |
| /src/main/resources | 服务端配置文件 |
| /src/main/* | 根据模块区分的源码 |
