# CentOS 部署指南
本文以 CentOS 7.x 版本为例，6.x 版本亦可作为参考。

## 目录
* [安装操作系统](#安装操作系统)
* 安装辅助软件
  * [MySQL](#安装-mysql)
  * [SSDB](#安装-ssdb)
  * [JDK](#安装-jdk)
  * [Tomcat](#安装-tomcat)
  
### 安装操作系统
安装步骤略。
操作系统建议安装最新的 CentOS 7.x 64 位版本。特别提示：对于用户量、数据量较大的用户，强烈不建议安装 Windows 系统。

### 安装 MySQL
MySQL 使用 5.6 版本，可直接使用 yum 源安装。
1. 下载 yum 源文件 [mysql-community.repo](https://wbs-qncdn.wisecrm.cn/uploader/20190727/88412717075896161.repo?attname=mysql-community.repo) 将其放置在 `/etc/yum.repos.d/` 目录
```
> wget /etc/yum.repos.d/ https://wbs-qncdn.wisecrm.cn/uploader/20190727/88412717075896161.repo?attname=mysql-community.repo
```
2. 安装
```
yum -y install mysql mysql-server
```
3. 安装完成后启动并使用 `mysql -uroot` 登录 MySQL，为 root 开启远程访问，步骤如下
```
> service mysqld start
> mysql -uroot
>
> use mysql;
> delete from user where host <> '127.0.0.1';
> update user set host = '%';
> flush privileges;
```

### 安装 SSDB
SSDB 使用最新版本，需要通过编译安装。

1. 下载解压
```
> wget --no-check-certificate https://github.com/ideawu/ssdb/archive/master.zip
> unzip master
> cd ssdb-master
```
2. 执行编译
```
> yum -y install autoconf gcc
> make 
```
3. 启动
```
> ./ssdb-server -d ssdb.conf
```

### 安装 JDK
JDK 使用 1.8 或以上版本，通过 rpm 安装。
1. 下载安装文件 [jdk-8u201-linux-x64.rpm](https://wbs-qncdn.wisecrm.cn/uploader/20190727/88412717075896161.repo?attname=jdk-8u201-linux-x64.rpm)
```
> wget https://wbs-qncdn.wisecrm.cn/uploader/20190727/88412717075896161.repo?attname=jdk-8u201-linux-x64.rpm
```
2. 安装
```
> rpm -ivh jdk-8u201-linux-x64.rpm
```

### 安装 Tomcat
Tomcat 为直接解压使用
1. 下载安装文件 [apache-tomcat-8.5.37.tar.gz](https://wbs-qncdn.wisecrm.cn/uploader/20190727/88416585798811703.gz?attname=apache-tomcat-8.5.37.tar.gz)
```
> wget https://wbs-qncdn.wisecrm.cn/uploader/20190727/88416585798811703.gz?attname=apache-tomcat-8.5.37.tar.gz
```
2. 解压后即可使用
```
> tar zxvf 
```

