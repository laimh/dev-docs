# WiseCRM365 项目通用规范

## 通用

- 提交的代码如果存在相应的 JIRA 问题，提交时要带上完整的问题号（如 GTH-6090）
- 单次 PR 的代码不要过多（过多代码会给 Review 带来不便），但要保证是一个完整的功能
- 规范整体参考 GitHubFlow/GiblabFlow 开发模式，即不提交代码到主干（主分支），全部在日常开发分支上开发（分支以问题为单位），完成后 PR（更多说明请参见下文的 *分支规范*）

## 分支规范

- 主分支
  - `master` 主分支（稳定版本，相当于 SVN 的 trunk）
  - `develop` 开发分支（开发版本，相当于 SVN 正在开发的新版本）
  - `release/#` 已发布版本（`#` 为版本号，如 4.7.0）
  - `customized/#-*` 定制开发版本（`#` 为版本号，如 4.7.0；`*` 为客户简称（如 cimic），完整示例 `customized/4.7.0-cimic`）
  - 以上分支除 `customized/#-*` 外均需走 PR 流程，无法直接提交
- 日常开发分支
  - `feature-#` 或 `feat-#` 新功能、改进等除 BUG 以外的
  - `bugfix-#` BUG 修复
  - `hotfix-#` BUG 热修复，与 `bugfix` 的差别是此分支会 PR 到 `master` 分支，并会尽快线上更新
  - 以上 `#` 部分为 JIRA 问题号，无问题号的则为问题简述
  - 日常开发分支由开发人员自行创建，完成后 PR 到主分支（可根据需要 PR 至多个主分支）
  
* 提示：带 `/` 的分支不能在 GitHub Desktop 上创建，需在网页上创建

## PR 规范
- 需要尽快线上修复的 BUG PR 至 `master`
- 其他不需要紧急修复的 BUG 或当前开发版本需求 PR 至 `develop`
- 管理员会定期/适时将 `master` 更新至 `develop`，以免影响新版本开发
- 要 PR 至哪个主分支，就从哪个主分支做开发分支

## 参考资料
- 分支规范 https://github.com/arslanbilal/git-cheat-sheet/blob/master/other-sheets/git-cheat-sheet-zh.md
- Git 学习 https://learngitbranching.js.org/?demo
