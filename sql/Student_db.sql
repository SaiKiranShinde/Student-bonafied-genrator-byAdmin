-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: student
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `batch_attendance`
--

DROP TABLE IF EXISTS `batch_attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `batch_attendance` (
  `id` int NOT NULL AUTO_INCREMENT,
  `batch` varchar(45) DEFAULT NULL,
  `January` int DEFAULT '0',
  `February` int DEFAULT '0',
  `March` int DEFAULT '0',
  `April` int DEFAULT '0',
  `May` int DEFAULT '0',
  `June` int DEFAULT '0',
  `July` int DEFAULT '0',
  `August` int DEFAULT '0',
  `September` int DEFAULT '0',
  `October` int DEFAULT '0',
  `November` int DEFAULT '0',
  `December` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `batch_attendance`
--

LOCK TABLES `batch_attendance` WRITE;
/*!40000 ALTER TABLE `batch_attendance` DISABLE KEYS */;
INSERT INTO `batch_attendance` VALUES (1,'2022-23',80,78,73,101,75,53,78,78,63,88,42,51);
/*!40000 ALTER TABLE `batch_attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request_bonafied`
--

DROP TABLE IF EXISTS `request_bonafied`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request_bonafied` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rollno` varchar(45) DEFAULT NULL,
  `date` tinytext,
  `status` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rollno_idx` (`rollno`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request_bonafied`
--

LOCK TABLES `request_bonafied` WRITE;
/*!40000 ALTER TABLE `request_bonafied` DISABLE KEYS */;
/*!40000 ALTER TABLE `request_bonafied` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_attendance`
--

DROP TABLE IF EXISTS `student_attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_attendance` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rollno` varchar(45) DEFAULT NULL,
  `January` int DEFAULT '0',
  `February` int DEFAULT '0',
  `March` int DEFAULT '0',
  `April` int DEFAULT '0',
  `May` int DEFAULT '0',
  `June` int DEFAULT '0',
  `July` int DEFAULT '0',
  `August` int DEFAULT '0',
  `September` int DEFAULT '0',
  `October` int DEFAULT '0',
  `November` int DEFAULT '0',
  `December` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `rollno_idx1` (`rollno`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_attendance`
--

LOCK TABLES `student_attendance` WRITE;
/*!40000 ALTER TABLE `student_attendance` DISABLE KEYS */;
INSERT INTO `student_attendance` VALUES (1,'123456789',20,50,73,63,15,26,41,58,63,78,22,0);
/*!40000 ALTER TABLE `student_attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_bonafied`
--

DROP TABLE IF EXISTS `student_bonafied`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_bonafied` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `date` tinytext,
  `rollno` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rollno_idx` (`rollno`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_bonafied`
--

LOCK TABLES `student_bonafied` WRITE;
/*!40000 ALTER TABLE `student_bonafied` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_bonafied` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_details`
--

DROP TABLE IF EXISTS `student_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rollno` varchar(45) NOT NULL,
  `name` tinytext,
  `fathername` text,
  `program` varchar(45) DEFAULT NULL,
  `branch` varchar(45) DEFAULT NULL,
  `sem` varchar(45) DEFAULT NULL,
  `batch` varchar(45) DEFAULT NULL,
  `phoneno` varchar(45) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rollno_idx` (`rollno`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_details`
--

LOCK TABLES `student_details` WRITE;
/*!40000 ALTER TABLE `student_details` DISABLE KEYS */;
INSERT INTO `student_details` VALUES (1,'123456789','XYZ','ABCD','B.Tech','ECE','IV/IV I SEM','2022-23','9876543210','dontreplay@example.com');
/*!40000 ALTER TABLE `student_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_login`
--

DROP TABLE IF EXISTS `user_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `isadmin` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`,`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_login`
--

LOCK TABLES `user_login` WRITE;
/*!40000 ALTER TABLE `user_login` DISABLE KEYS */;
INSERT INTO `user_login` VALUES (1,'123456789','123456789',NULL),(2,'Admin','Admin',1);
/*!40000 ALTER TABLE `user_login` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-29  1:33:11
