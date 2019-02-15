# 多个 GitHub 账户的配置

## 通过 ssh-key

### 生成 ssh-key
进入 Git Bash 命令行，然后通过 `ssh-keygen` 命令生成，如下

```bash
$ ssh-keygen -C "wisecrmgh"
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/zhaoff/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

注意在第一次回车的时候 `Enter file in which to save the key` 提示输入生成文件的名称，可以直接回车使用默认的 `~/.ssh/id_rsa` （`~` 表示用户目录），但由于我们需要生成多个 key 文件，所以为避免默认文件名冲突我们这里指定名称为 `~/.ssh/zhaoff`，再次回车后询问是否输入使用密码，可以留空直接回车两次，然后会生成两个文件。

- zhaoff
- zhaoff.pub

根据需要，你可以通过此命令生成多个 ssh-key，请注意如果文件名相同会覆盖。

### 将 ssh-key 设置到 GitHub 中
进入 [SSH keys](https://github.com/settings/keys) 页面，点击 [New SSH key] 按钮把上一步生成的 key 添加到相应的 GitHub 账户中。

具体步骤比较简单，这里不再复述。

### 设置 config 文件
文件位于 `~/.ssh/config`，以下是一个示例，例子中配置了两个 GitHub 账号，请注意注释。

```
Host zhaoff.com  # 别名，建议使用 USER.com 这种形式
HostName github.com
IdentityFile C:\Users\zhaoff\.ssh\zhaoff  # key 文件
PreferredAuthentications publickey
User zhaoff  # GitHub 用户名

Host wisecrmgh.com
HostName github.com
IdentityFile C:\Users\zhaoff\.ssh\wisecrmgh
PreferredAuthentications publickey
User wisecrmgh
```

### 签出 git clone
以 [CRCS](https://github.com/WiseCRM/365crcs) 为例，此项目的一般签出地址为 `git@github.com:WiseCRM/365crcs.git`，需要将 `github.com` 部分修改为上一步中设置的 Host 参数，即 `zhaoff.com` 或 `wisecrmgh.com`（取决于你使用哪个账号）。

- 打开 GitHub Desktop
- 在菜单中选择 File -> Clone repository ...
- 在打开的窗口中切换页签至 URL
- 输入 git 签出地址即可

### 更进一步
在提交代码时，由于配置了多个账号，Git/GitHub Desktop 也许并不知道你使用的是哪个账号，此时可以修改项目目录下 `.git/config` 文件，明确指定此项目使用哪个账号。
很简单，打开此文件并添加以下配置（其中 `name` 推荐填写你的用户名，但实际上包括 `email` 你都可以任意填写）
```
[user]
	name = wisecrmgh
	email = zhaoff@wisecrm.com
```