drop database if exists sanmall;
drop user sanmall@'localhost';
create database sanmall default character set utf8mb4 collate utf8mb4_bin;
create user 'sanmall'@'%' identified by 'sm1101@!';
grant all privileges on sanmall.* to 'sanmall'@'%';
flush privileges;
