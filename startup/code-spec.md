# WiseCRM365 项目通用规范

## 通用

- 规范整体参考 GitHubFlow/GiblabFlow 开发模式，即不提交代码到主干（主分支），全部在开发分支上开发（分支以问题为单位），完成后 PR（更多说明请参见下文的 _分支规范_）
- 单次 PR 的代码不要过多（过多代码会给 Review 带来不便），但要保证是一个完整的功能

## 分支规范

- 主分支
  - `master` 主分支（稳定版本，相当于 SVN 的 trunk）
  - `develop` 开发分支（开发版本，相当于 SVN 正在开发的新版本）
- 开发分支
  - `feat-#` 或 `feature-#` 新功能、改进等除 BUG 以外的
  - `bugfix-#` BUG 修复
  - `hotfix-#` BUG 热修复，与 `bugfix` 的差别是此分支会 PR 到 `master` 分支，并会尽快线上更新
  - 以上 `#` 部分为 JIRA 问题号，无问题号的则为问题简述
  - 开发分支由开发人员自行创建，完成后 PR 到主分支（可根据需要 PR 至多个分支）

## PR 规范

- PR 标题为分支名称 + 问题简述（如 `hotfix-GTH-123 保存角色时不自动关闭编辑窗口`）
- 需要尽快线上修复的 BUG PR 至 `master`（即 `hotfix`）
- 其他不需要紧急修复的 BUG 或需求 PR 至 `develop`（即 `bugfix` 或 `feat`）
- 管理员会定期/适时将 `master` 更新至 `develop`，以免影响新版本开发
- 要 PR 至哪个主分支，就从哪个分支做开发分支

## 发布规范

- 版本发布分为 _公版发布_ 和 _定制发布_，通过 GitHub 的 releases 功能进行操作
- _公版发布_ 版本命名方式为 `vX.Y.Z`，如 `v4.8.1`
- _定制发布_ 版本命名方式为 `vX.Y.Z-n`，如 `v4.8.1-tuoliduo`
- 发布版修订流程
  - 切换分支至需要修订的 tag 上（detached HEAD）
  - 基于此 tag 创建一个开发分支，并在其上进行修订工作
  - 完成修订后，重新发布一个修订分支（原 tag 不动）
- 如果针对已发布的版本进行修订，版本号最后一位递增，如 `v4.8.2`


## 参考资料

- 分支规范 https://github.com/arslanbilal/git-cheat-sheet/blob/master/other-sheets/git-cheat-sheet-zh.md
- Git 学习 https://learngitbranching.js.org/?demo
