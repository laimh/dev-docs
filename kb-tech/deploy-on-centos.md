# CentOS 部署指南
本文以 CentOS 7.x 版本为例，6.x 版本亦可作为参考。

## 目录
* [安装操作系统](#安装操作系统)
* 安装辅助软件
  * [MySQL](#安装-mysql)
  * SSDB
  * JDK
  * Apache Tomcat
  
### 安装操作系统
安装步骤略。
操作系统建议安装最新的 CentOS 7.x 64 位版本。特别提示：对于用户量、数据量较大的用户，强烈不建议安装 Windows 系统。

### 安装 MySQL
安装 MySQL 5.6 版本，可直接使用 yum 源安装。
1. 下载 yum 源文件 [mysql-community.repo](https://wbs-qncdn.wisecrm.cn/uploader/20190727/88412717075896161.repo?attname=mysql-community.repo) 将其放置在 `/etc/yum.repos.d/` 目录
```
> wget /etc/yum.repos.d/ https://wbs-qncdn.wisecrm.cn/uploader/20190727/88412717075896161.repo?attname=mysql-community.repo
```

2. 运行安装命令
```
yum -y install mysql mysql-server
```

3. 安装完成后使用 `mysql -uroot` 本机登录 MySQL，为 root 开启远程访问，步骤如下
```
> mysql -uroot
> use mysql;
> delete from user where host <> '127.0.0.1';
> update user set host = '%';
> flush privileges;
```

### 安装 SSDB
下载最新的
