# PC 环境搭建

### 系统环境要求

> 如无特殊说明，以下软件建议使用最新版本。其中 JDK/Maven/NodeJS 强烈建议加入环境变量，以便使用相关命令行

- [ ] JDK 1.8
- [ ] IDEA（推荐） 或 Eclipse for Enterprise Java Developers
  - [JRebel](https://github.com/orgs/WiseCRM/teams/wisecrm/discussions/3)
- [ ] VSCode
  - ESLint（此插件依赖 NodeJS，通过 npm 命令执行 `npm install -g eslint`）
  - VS Live Share （非必须）
- [ ] Tomcat 8.0+
- [ ] Maven 3.5+
- [ ] NodeJS
- [ ] GitHub Desktop

### 导入项目

> 如有多个 GitHub 账号可参考 [多账号配置](https://github.com/WiseCRM/dev-docs/blob/master/startup/multi-account.md)

1. 通过 `git clone` 或 GitHub Desktop 签出代码
2. 然后将 `.eclipse/` 文件夹内的文件复制到项目目录（仅 Eclipse 适用）
3. 用 IDEA/Eclipse 导入为 Maven 工程
