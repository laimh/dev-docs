## 通用
- 一个问题要分 1-N 次 提交（commit），不要将多个问题 1 次提交
- 提交的代码如果存在相应的 JIRA 问题，提交时要带上完整的问题号（如 GTH-6090）
- 采用 GitHub Flow 开发模式，即不能提交代码到主干，全部在分支上开发（分支以问题为单位），完成后 PR（Pull Request）到主分支（更多说明请参见下文的 *分支规范*）
- 单次 PR 的代码不要过多（过多代码会给 CR（Code Reviews） 带来不便），但要保证是一个完整的功能



## 分支规范

- 主分支
  - `master` 主分支（稳定版本，相当于 SVN 的 trunk）
  - `develop` 开发分支（开发版本，相当于 SVN 正在开发的新版本）
  - `release/#` 已发布版本（`#` 为版本号，如 4.7.0）
  - `customized/#-*` 定制开发版本（`#` 为版本号，如 4.7.0；`*` 为客户简称（如 cimic），完整示例 `customized/4.7.0-cimic`）
  - 以上分支除 `customized/#-*` 外均需走 PR 流程，无法直接提交
- 日常开发分支
  - `feature-#` 或 `feat-#` 新功能、改进等除 BUG 以外的
  - `bugfix-#` 或 `bug-#` BUG 修复
  - 以上 `#` 部分为 JIRA 问题号，或问题描述（全小写英文，单词间用 `-` 分割）
  - 日常开发分支由开发人员自行创建，完成后可 PR 至多个主分支
- 本规范参考 https://github.com/arslanbilal/git-cheat-sheet/blob/master/other-sheets/git-cheat-sheet-zh.md 推荐阅读