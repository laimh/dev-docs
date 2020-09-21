# CentOS 部署指南
本文基于 CentOS 7.x 版本为例，6.x 8.x 或其他版本可能稍有区别。

## 目录
* [安装操作系统](#安装操作系统)
* 安装辅助软件
  * [MySQL](#安装-mysql)
  * [SSDB](#安装-ssdb)
  * [JDK](#安装-jdk)
  * [Tomcat](#安装-tomcat)
* [部署](#部署-wisecrm365)
* [自动备份](#自动备份)
* [启用 HTTPS 访问](#启用-HTTPS-访问)
  
### 安装操作系统
安装步骤略。

操作系统建议安装最新的 CentOS 7.x 64 位版本，系统安装完毕后立即执行一次补丁更新。
```
yum update -y
```

### 安装 MySQL
MySQL 使用 5.6 版本，可直接通过 yum 源安装。

1. 下载 yum 源文件
```
wget -O /etc/yum.repos.d/mysql-community.repo https://wbs-qncdn.wisecrm.cn/uploader/20191227/101629694753510368.repo
```
2. 安装
```
yum -y install mysql mysql-server
```
3. 安装完成后启动并使用 `mysql -uroot` 登录 MySQL
```
service mysqld start
mysql -uroot
```
4. 成功登录 MySQL 后为 root 开启远程访问权限，如下
```
$ use mysql;
$ delete from user where host <> '127.0.0.1';
$ update user set host = '%';
$ flush privileges;
```

5. 调整 MySQL 参数。调整后重启 MySQL `service mysqld restart`

  5.1. 替换 `utf8_5624_1` 编码文件（注意此文件针对 MySQL5.6 版本，其他版本勿用）
  ```
  wget -O /usr/share/mysql/charsets/Index.xml https://wbs-qncdn.wisecrm.cn/uploader/20200306/4038951694243258.xml
  ```
  
  5.2. 添加忽略表名大小写参数到 my.cnf
  ```
  // 1. 打开编辑
  vim /etc/my.cnf
  // 2. 然后添加以下行到 [mysqld] 下面
  lower_case_table_names = 1
  ```

### 安装 SSDB
SSDB 使用最新版本，需要通过编译安装。
亦可参考官网安装教程：http://ssdb.io/docs/zh_cn/install.html

1. 下载并解压
```
wget --no-check-certificate https://github.com/ideawu/ssdb/archive/master.zip
unzip master
cd ssdb-master
```
2. 编译安装
```
yum -y install autoconf automake gcc gcc-c++ libtool
make 
```
3. 启动
```
./ssdb-server -d ssdb.conf
```

### 安装 JDK
JDK 使用 1.8 或以上版本，通过 rpm 安装。
1. 下载安装文件
```
wget -O jdk-8u201-linux-x64.rpm https://wbs-qncdn.qidapp.cn/uploader/20190727/jdk-8u201-linux-x64.rpm
```
2. 安装
```
rpm -ivh jdk-8u201-linux-x64.rpm
```

### 安装 Tomcat
Tomcat 使用 8.5 版本，直接解压使用（提供的 Tomcat 已做优化，端口为 `18080`）。
1. 下载安装文件
```
wget -O ./tomcat18080.zip https://wbs-qncdn.wisecrm.cn/uploader/20190727/88417740827431550.zip
```
2. 解压即可使用
```
# yum -y install zip unzip
unzip tomcat18080.zip 
```


### 部署 WiseCRM365
1. 进入 WiseCRM365 发行列表选择需要的版本下载，或联系研发索取
2. 将下载后的发行包解压，将解压后的 ROOT.war 文件复制到 Tomcat 的 webapps 目录
3. 启动
```
$TOMCAT$/bin/startup.sh
```


### 自动备份
自动备份是通过 python 脚本配合 cron 任务来实现，需服务器安装 python 程序（CentOS 自带），可以执行 `python -V` 查看是否已安装。
1. 下载 python 备份脚本
```
wget -O ./backupdb.py https://wbs-qncdn.wisecrm.cn/uploader/20190727/88418877353254072.py
```
2. 下载后注意修改 `backupdb.py` 文件内的 `DB_USER` 和 `DB_PASSWD` 参数，即 MySQL 用户名、密码，以及备份存在目录 `BACKUP_DIR`
3. 设置 cron 定时备份，在 `/etc/crontab` 文件添加一行（请注意 py 脚本文件位置改成实际的）
```
echo "0 4 * * * root (python /data/mysql_backups/backupdb.py)" >> /etc/crontab
```
4. 也可以手动执行备份
```
python /data/mysql_backups/backupdb.py
```


### 启用 HTTPS 访问

HTTPS 可以提供加密数据传输通道，数据传输过程更安全，有效防止泄露与篡改。启用 HTTPS 需要 `nginx` 的支持。

> 在 Windows 版本中提供的 `wisecrm365-dock` 同样提供了 HTTPS 的支持，可参见 `$DOCK/nginx/conf/nginx.conf`

1. 安装 nginx
```
rpm -Uvh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
```
```
yum install -y nginx
```

2. 使用默认配置文件
Nginx 配置文件默认安装在 `/etc/nginx/nginx.conf`。为简化操作，可直接使用我们提供的配置好的配置文件进行覆盖。
```
wget -O /etc/nginx/nginx.conf https://wbs-qncdn.wisecrm.cn/uploader/20200921/21230069707758771.conf
```

3. 安装证书并修改域名
将 SSL 证书放在 nginx.conf 同目录下，证书名称默认要求为 `crmssl.cre` 和 `crmssl.key`，如名称不匹配可自行修改。然后，打开 nginx.conf 文件修改访问域名。
```
vim /etc/nginx/nginx.conf

...
server_name           127.0.0.1;
...
```
将 `127.0.0.1` 修改为客户的域名即可。

4. 启动
上述步骤完成后，即完成了所有配置。以下提供常用 nginx 命令供参考。
```
# 启动
nginx

# 测试配置文件正确性
nginx -t

# 重新加载配置文件使之生效
nginx -s reload

# 停止
nginx -s stop
```
