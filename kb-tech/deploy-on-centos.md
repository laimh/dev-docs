# CentOS 部署指南
本文以 CentOS 7.x 版本为例，6.x 版本亦可作为参考。

## 目录
* [安装操作系统](#安装操作系统)
* 安装辅助软件
  * [MySQL](#安装-mysql)
  * [SSDB](#安装-ssdb)
  * [JDK](#安装-jdk)
  * [Tomcat](#安装-tomcat)
* [部署](#部署-wisecrm365)
* [自动备份](#自动备份)
  
### 安装操作系统
安装步骤略。

操作系统建议安装最新的 CentOS 7.x 64 位版本，系统安装完毕后立即执行一次补丁更新。`yum update`

### 安装 MySQL
MySQL 使用 5.6 版本，可直接通过 yum 源安装。

1. 下载 yum 源文件将其放置在 `/etc/yum.repos.d/` 目录
```
wget /etc/yum.repos.d/ https://wbs-qncdn.wisecrm.cn/uploader/20190727/88412717075896161.repo?attname=mysql-community.repo
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

### 安装 SSDB
SSDB 使用最新版本，需要通过编译安装。

1. 下载并解压
```
wget --no-check-certificate https://github.com/ideawu/ssdb/archive/master.zip
unzip master
cd ssdb-master
```
2. 编译安装
```
yum -y install autoconf gcc
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
wget https://wbs-qncdn.qidapp.cn/uploader/20190727/jdk-8u201-linux-x64.rpm?attname=jdk-8u201-linux-x64.rpm
```
2. 安装
```
rpm -ivh jdk-8u201-linux-x64.rpm
```

### 安装 Tomcat
Tomcat 使用 8.5 版本，直接解压使用（提供的 Tomcat 已做优化，端口为 `18080`）。
1. 下载安装文件
```
wget https://wbs-qncdn.wisecrm.cn/uploader/20190727/88417740827431550.zip?attname=tomcat18080
```
2. 解压即可使用
```
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
自动备份是通过 py 脚本配合 cron 任务来实现的。
1. 下载 py 备份脚本
```
wget https://wbs-qncdn.wisecrm.cn/uploader/20190727/88418877353254072.py?attname=backupdb.py
```
2. 下载后注意修改 `backupdb.py` 文件内的 `DB_USER` `DB_PASSWD` 参数，即 MySQL 用户名、密码，以及备份存在目录 `BACKUP_DIR`
3. 设置 cron 定时备份，在 `/etc/crontab` 文件添加一行（请注意 py 脚本文件位置改成自己的）
```
echo "0 4 * * * root (python /data/mysql_backups/backupdb.py)" >> /etc/crontab

```
4. 也可以手动执行备份
```
python /data/mysql_backups/backupdb.py
```
