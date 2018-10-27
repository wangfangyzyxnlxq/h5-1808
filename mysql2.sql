/*
Navicat MySQL Data Transfer

Source Server         : 1808
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mysql2

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-27 17:45:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `uid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uname` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` varchar(255) CHARACTER SET utf8 NOT NULL,
  `qty` varchar(255) CHARACTER SET utf8 NOT NULL,
  `imgurl` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=80 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of car
-- ----------------------------

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `uname` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `xl` int(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '无限极化妆品', '123', '12', '../images/l1', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('2', '无限极化妆品', '234', '223', '../images/l2', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('3', '无限极化妆品', '235', '34', '../images/l3', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('4', '无限极化妆品', '125', '56', '../images/l4', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('5', '无限极化妆品', '675', '54', '../images/l5', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('6', '无限极化妆品', '234', '34', '../images/l3', '2018-10-23 17:55:40');
INSERT INTO `list` VALUES ('7', '无限极化妆品', '432', '43', '../images/l7', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('8', '无限极化妆品', '453', '45', '../images/l8', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('9', '无限极化妆品', '321', '66', '../images/l9', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('10', '无限极化妆品', '345', '45', '../images/l10', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('11', '无限极化妆品', '546', '56', '../images/l11', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('12', '无限极化妆品', '654', '78', '../images/l12', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('13', '无限极化妆品', '655', '34', '../images/l13', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('14', '无限极化妆品', '656', '34', '../images/l14', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('15', '无限极化妆品', '657', '22', '../images/l15', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('16', '无限极化妆品', '658', '289', '../images/l16', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('17', '无限极化妆品', '659', '556', '../images/l17', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('18', '无限极化妆品', '660', '4343', '../images/l18', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('19', '无限极化妆品', '661', '234', '../images/l19', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('20', '无限极化妆品', '662', '23', '../images/l2', '2018-10-24 09:00:14');
INSERT INTO `list` VALUES ('21', '无限极化妆品', '663', '445', '../images/l2', '2018-10-24 08:59:08');
INSERT INTO `list` VALUES ('22', '无限极化妆品', '664', '564', '../images/l1', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('23', '无限极化妆品', '665', '2325', '../images/l2', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('24', '无限极化妆品', '666', '234', '../images/l3', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('25', '无限极化妆品', '667', '121', '../images/l4', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('26', '无限极化妆品', '668', '244', '../images/l5', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('27', '无限极化妆品', '669', '234', '../images/l3', '2018-10-23 17:55:35');
INSERT INTO `list` VALUES ('28', '无限极化妆品', '670', '456', '../images/l7', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('29', '无限极化妆品', '671', '235', '../images/l8', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('30', '无限极化妆品', '672', '234', '../images/l9', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('31', '无限极化妆品', '673', '123', '../images/l10', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('32', '无限极化妆品', '674', '345', '../images/l11', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('33', '无限极化妆品', '675', '567', '../images/l12', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('34', '无限极化妆品', '676', '234', '../images/l13', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('35', '无限极化妆品', '677', '234', '../images/l14', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('36', '无限极化妆品', '678', '456', '../images/l15', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('37', '无限极化妆品', '633', '457', '../images/l16', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('38', '无限极化妆品', '632', '235', '../images/l17', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('39', '无限极化妆品', '234', '456', '../images/l18', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('40', '无限极化妆品', '342', '2345', '../images/l12', '2018-10-24 09:00:04');
INSERT INTO `list` VALUES ('41', '无限极化妆品', '123', '12', '../images/l1', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('42', '无限极化妆品', '234', '223', '../images/l2', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('43', '无限极化妆品', '235', '34', '../images/l3', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('44', '无限极化妆品', '125', '56', '../images/l4', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('45', '无限极化妆品', '675', '54', '../images/l5', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('46', '无限极化妆品', '234', '34', '../images/l5', '2018-10-24 08:59:58');
INSERT INTO `list` VALUES ('47', '无限极化妆品', '432', '43', '../images/l7', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('48', '无限极化妆品', '453', '45', '../images/l8', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('49', '无限极化妆品', '321', '66', '../images/l9', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('50', '无限极化妆品', '345', '45', '../images/l10', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('51', '无限极化妆品', '546', '56', '../images/l11', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('52', '无限极化妆品', '654', '78', '../images/l12', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('53', '无限极化妆品', '655', '34', '../images/l13', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('54', '无限极化妆品', '656', '34', '../images/l14', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('55', '无限极化妆品', '657', '22', '../images/l15', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('56', '无限极化妆品', '658', '289', '../images/l16', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('57', '无限极化妆品', '659', '556', '../images/l17', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('58', '无限极化妆品', '660', '4343', '../images/l1', '2018-10-24 08:59:52');
INSERT INTO `list` VALUES ('59', '无限极化妆品', '661', '234', '../images/l1', '2018-10-24 08:59:44');
INSERT INTO `list` VALUES ('60', '无限极化妆品', '662', '23', '../images/l2', '2018-10-23 19:58:40');
INSERT INTO `list` VALUES ('61', '无限极化妆品', '663', '445', '../images/l7', '2018-10-23 19:58:34');
INSERT INTO `list` VALUES ('62', '无限极化妆品', '664', '564', '../images/l1', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('63', '无限极化妆品', '665', '2325', '../images/l2', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('64', '无限极化妆品', '666', '234', '../images/l3', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('65', '无限极化妆品', '667', '121', '../images/l4', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('66', '无限极化妆品', '668', '244', '../images/l5', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('67', '无限极化妆品', '669', '234', '../images/l3', '2018-10-23 17:55:50');
INSERT INTO `list` VALUES ('68', '无限极化妆品', '670', '456', '../images/l7', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('69', '无限极化妆品', '671', '235', '../images/l8', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('70', '无限极化妆品', '672', '234', '../images/l9', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('71', '无限极化妆品', '673', '123', '../images/l10', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('72', '无限极化妆品', '674', '345', '../images/l11', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('73', '无限极化妆品', '675', '567', '../images/l12', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('74', '无限极化妆品', '676', '234', '../images/l13', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('75', '无限极化妆品', '677', '234', '../images/l14', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('76', '无限极化妆品', '678', '456', '../images/l15', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('77', '无限极化妆品', '633', '457', '../images/l16', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('78', '无限极化妆品', '632', '235', '../images/l17', '2018-10-23 17:55:22');
INSERT INTO `list` VALUES ('79', '无限极化妆品', '234', '456', '../images/l1', '2018-10-24 08:59:40');
INSERT INTO `list` VALUES ('80', '无限极化妆品', '342', '2345', '../images/l9', '2018-10-24 08:59:36');

-- ----------------------------
-- Table structure for sy
-- ----------------------------
DROP TABLE IF EXISTS `sy`;
CREATE TABLE `sy` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uname` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `dz` varchar(255) NOT NULL,
  `qg` varchar(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sy
-- ----------------------------
INSERT INTO `sy` VALUES ('1', '巨型一号天然果鲜', '￥123', '7.8折', '立即抢购', 'images/in1.jpg');
INSERT INTO `sy` VALUES ('2', '巨型一号天然果鲜', '￥124', '5.6折', '立即抢购', 'images/in2.jpg');
INSERT INTO `sy` VALUES ('3', '巨型一号天然果鲜', '￥125', '2.3折', '立即抢购', 'images/in3.jpg');
INSERT INTO `sy` VALUES ('4', '巨型一号天然果鲜', '￥126', '5.4折', '立即抢购', 'images/in4.jpg');
INSERT INTO `sy` VALUES ('5', '巨型一号天然果鲜', '￥127', '3.5折', '立即抢购', 'images/in5.jpg');
INSERT INTO `sy` VALUES ('6', '巨型一号天然果鲜', '￥128', '3.4折', '立即抢购', 'images/in6.jpg');
INSERT INTO `sy` VALUES ('7', '巨型一号天然果鲜', '￥129', '3.5折', '立即抢购', 'images/in7.jpg');
INSERT INTO `sy` VALUES ('8', '巨型一号天然果鲜', '￥130', '3.6折', '立即抢购', 'images/in8.jpg');
INSERT INTO `sy` VALUES ('9', '巨型一号天然果鲜', '￥123', '3.7折', '立即抢购', 'images/in2.jpg');
INSERT INTO `sy` VALUES ('10', '巨型一号天然果鲜', '￥132', '3.8折', '立即抢购', 'images/in1.jpg');
INSERT INTO `sy` VALUES ('11', '巨型一号天然果鲜', '￥133', '3.9折', '立即抢购', 'images/in2.jpg');
INSERT INTO `sy` VALUES ('12', '巨型一号天然果鲜', '￥134', '4.6折', '立即抢购', 'images/in3.jpg');
INSERT INTO `sy` VALUES ('13', '巨型一号天然果鲜', '￥135', '4.8折', '立即抢购', 'images/in4.jpg');
INSERT INTO `sy` VALUES ('14', '巨型一号天然果鲜', '￥136', '5.2折', '立即抢购', 'images/in5.jpg');
INSERT INTO `sy` VALUES ('15', '巨型一号天然果鲜', '￥137', '7.3折', '立即抢购', 'images/in6.jpg');
INSERT INTO `sy` VALUES ('16', '巨型一号天然果鲜', '￥138', '8.4折', '立即抢购', 'images/in7.jpg');
INSERT INTO `sy` VALUES ('17', '巨型一号天然果鲜', '￥139', '8.5折', '立即抢购', 'images/in1.jpg');
INSERT INTO `sy` VALUES ('18', '巨型一号天然果鲜', '￥140', '7.6折', '立即抢购', 'images/in2.jpg');
INSERT INTO `sy` VALUES ('19', '巨型一号天然果鲜', '￥141', '3.4折', '立即抢购', 'images/in3.jpg');
INSERT INTO `sy` VALUES ('20', '巨型一号天然果鲜', '￥142', '3.8折', '立即抢购', 'images/in4.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `telePhone` varchar(255) CHARACTER SET utf8 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '13277735120', 'zxcvbnm');
INSERT INTO `user` VALUES ('2', '13277735120', 'zxcvbnm');
INSERT INTO `user` VALUES ('3', 'assd', 'fsdg');
INSERT INTO `user` VALUES ('4', '13277735120', 'ZXCVBN');
INSERT INTO `user` VALUES ('9', '13277745120', 'zxcvbnm');
INSERT INTO `user` VALUES ('6', '13277723450', 'asdfgh');
INSERT INTO `user` VALUES ('7', '13533335120', 'asdfgh');
INSERT INTO `user` VALUES ('8', '13777451910', 'asdfgh');
SET FOREIGN_KEY_CHECKS=1;
