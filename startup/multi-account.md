# 多个 GitHub 账户的配置

## 通过 ssh-key

### 生成 ssh-key
进入 Git Bash 命令行，然后通过 `ssh-keygen` 命令生成，如下

```bash
$ ssh-keygen -C "wisecrmgh"
Generating public/private rsa key pair.
Enter file in which to save the key (/c/Users/devezhao/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

注意在第一次回车的时候 `Enter file in which to save the key` 提示输入生成文件的名称，可以直接回车使用默认的 `~/.ssh/id_rsa` （`~` 表示用户目录），但由于我们需要生成多个 key 文件，所以为避免默认文件名冲突我们这里指定名称为 `~/.ssh/devezhao`，再次回车后询问是否输入使用密码，可以留空直接回车两次，然后会生成两个文件。

- devezhao
- devezhao.pub

根据需要，你可以通过此命令生成多个 ssh-key，请注意如果文件名相同会覆盖。

### 将 ssh-key 设置到 GitHub 中
进入 [SSH keys](https://github.com/settings/keys) 页面，点击 [New SSH key] 按钮把上一步生成的 key 添加到相应的 GitHub 账户中。

具体步骤比较简单，这里不再复述。

### 设置 config 文件
文件位于 `~/.ssh/config`，以下是一个示例，例子中配置了两个 GitHub 账号，请注意注释。

```
Host devezhao.com  # 别名，建议使用 USER.com 这种形式
HostName github.com
IdentityFile C:\Users\devezhao\.ssh\devezhao  # key 文件
PreferredAuthentications publickey
User devezhao  # GitHub 用户名

Host wisecrmgh.com
HostName github.com
IdentityFile C:\Users\devezhao\.ssh\wisecrmgh
PreferredAuthentications publickey
User wisecrmgh
```

