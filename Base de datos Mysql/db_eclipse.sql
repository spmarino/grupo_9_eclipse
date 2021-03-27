-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: db_eclipse
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.17-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `car` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `products_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1,
  `shipping_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_id_idx` (`products_id`),
  KEY `fk_users_id_idx` (`user_id`),
  KEY `fk_shipping_idx` (`shipping_id`),
  CONSTRAINT `fk_car_products` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_car_shippings` FOREIGN KEY (`shipping_id`) REFERENCES `shippings` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_car_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
/*!40000 ALTER TABLE `car` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `features`
--

DROP TABLE IF EXISTS `features`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `features` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `varietal` varchar(45) DEFAULT NULL,
  `vintage` int(11) DEFAULT NULL,
  `type_of_barrel` varchar(45) DEFAULT NULL,
  `time_in_bottle` int(11) DEFAULT NULL,
  `harvest` varchar(45) DEFAULT NULL,
  `finca` varchar(45) DEFAULT NULL,
  `terroir` varchar(45) DEFAULT NULL,
  `time_in_barrel` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `features`
--

LOCK TABLES `features` WRITE;
/*!40000 ALTER TABLE `features` DISABLE KEYS */;
INSERT INTO `features` VALUES (15,'Malbec',2020,'Roble',6,'Manual','La quebrada','San Rafael, Mendoza',NULL),(17,'100% Malbec   ',2020,'Roble Francés   ',3,'Manual','Doña Elsa y Asti   ','San Rafael, Mendoza   ',NULL),(18,'100% Malbec ',2019,'Roble Francés ',8,'Manual','Doña Elsa, Asti y Constanza  ','San Rafael, Valle de Uco y Luján de Cuyo, Men',NULL),(19,'36% Moscato Bianco, 32% Chardonnay, 32% Viogn',2020,'Roble Francés',2,'Manual','Doña Elsa, Asti y Las Paredes','San Rafael, Mendoza',NULL),(20,'100% Viognier',2020,'Roble Francés',4,'Manual','La peña ','Valle de Uco, Mendoza',NULL),(21,'100% Torrontés',2020,'Roble Francés',3,'Manual','Doña Elsa','San Rafael, Mendoza',NULL),(22,'Blend Blanco (Torrontés, Sauvignon Blanc, Mos',2020,'Roble Francés',3,'Manual','Doña Elsa','San Rafael, Mendoza',NULL),(23,'95% Torrontés, 5% Sauvignon Blanc',2020,'Roble Francés',18,'Manual','Doña Elsa','San Rafael, Mendoza',NULL),(24,'100% Malbec',2019,'Roble Francés',4,'Manual','Doña Elsa, Asti y Constanza','San Rafael y Valle de Uco, Mendoza',NULL);
/*!40000 ALTER TABLE `features` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `price` int(10) unsigned NOT NULL,
  `discount` int(10) unsigned DEFAULT 0,
  `image` varchar(45) NOT NULL DEFAULT 'default.png',
  `free_shipping` tinyint(1) NOT NULL DEFAULT 0,
  `cover_page` tinyint(1) NOT NULL DEFAULT 0,
  `features_id` int(11) NOT NULL,
  `tasting_notes_id` int(11) NOT NULL,
  `product_category_id` int(11) NOT NULL,
  `description` tinytext NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_features_id_idx` (`features_id`),
  KEY `fk_tasting_notes_id_idx` (`tasting_notes_id`),
  KEY `fk_product_category_id_idx` (`product_category_id`),
  CONSTRAINT `fk_features` FOREIGN KEY (`features_id`) REFERENCES `features` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_category` FOREIGN KEY (`product_category_id`) REFERENCES `products_categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_tasting_notes` FOREIGN KEY (`tasting_notes_id`) REFERENCES `tasting_notes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (6,'Génesis Malbec',2670,35,'producto1.png',1,1,15,15,1,'Génesis es el comienzo de algo.\r\n\r\nY si estamos hablando de un vino, es el comienzo de algo bueno… El vino que puede iniciar momentos...\r\n\r\nTodo comienza con un SI…'),(8,'Oasis Sur Malbec   ',2733,35,'producto1.png',1,0,17,17,1,'Esta línea de vinos rinde homenaje a nuestro origen como Bodega, a nuestro querido San Rafael, el Oasis Sur de Mendoza. Son vinos muy frescos, frutados y  destacan las bondades de nuestro terroir. Las fincas propias de las cuales provienen las uvas para '),(9,'Famiglia Bianchi Malbec ',4148,25,'image-1616740340080.png',1,1,18,18,1,'La línea Famiglia Bianchi Malbec, reconocida internacionalmente, nos acerca una gama de vinos complejos e intensos que logran expresar de manera inigualable, las particularidades propias de los viñedos que la familia Bianchi posee en San Rafael y el Val'),(10,'Famiglia Bianchi White Blend',2988,10,'image-1616740536002.png',1,1,19,19,2,'La línea Famiglia, reconocida internacionalmente, nos acerca una gama de vinos complejos e intensos que logran expresar de manera inigualable, las particularidades propias de los viñedos que la familia Bianchi posee en San Rafael y el Valle de Uco.'),(11,'Famiglia Bianchi Viognier',4150,25,'image-1616790652848.png',1,1,20,20,2,'La línea Famiglia, reconocida internacionalmente, nos acerca una gama de vinos complejos e intensos que logran expresar de manera inigualable, las particularidades propias de los viñedos que la familia Bianchi posee en San Rafael y el Valle de Uco.'),(12,'Don Valentin Lacrado Torrontes',1600,20,'image-1616790935177.png',1,1,21,21,2,'En 1965 Enzo Bianchi, ícono de la enología argentina, lanza el vino Don Valentín Lacrado, un vino de calidad superior en honor a su padre y fundador de nuestra bodega. Así nació un clásico argentino que forma parte de nuestra historia desde hace má'),(13,'Marlo Blanco Dulce de Bianchi',1500,15,'image-1616791155786.png',1,1,22,22,2,'Marló Dulce es un vino con una personalidad genuina, con un dulzor amable y un aroma frutado tan auténtico que lo vuelve único. '),(14,'New Age',750,5,'image-1616791456361.png',0,1,23,23,2,'Desde su lanzamiento, New Age ha revolucionado la categoría de vinos. New Age es un vino dulce con una personalidad única, con aromas frutados y florales de gran intensidad. Sus sabores ligeramente efervescentes y su sensación en boca lo hacen un vino '),(15,'L10 by Bianchi Premium Malbec',3500,15,'image-1616791787565.png',0,1,24,24,1,'Con esta línea de vinos L10 by Bianchi, queremos hacer honor a esta cepa emblemática argentina, así como ayudar a los niños mas vulnerables. La elaboración de estos vinos, colabora con la Fundación Leo Messi en seguir construyendo proyectos focaliza');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_categories`
--

DROP TABLE IF EXISTS `products_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_categories`
--

LOCK TABLES `products_categories` WRITE;
/*!40000 ALTER TABLE `products_categories` DISABLE KEYS */;
INSERT INTO `products_categories` VALUES (1,'TINTO'),(2,'BLANCO');
/*!40000 ALTER TABLE `products_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shippings`
--

DROP TABLE IF EXISTS `shippings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shippings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `zone` varchar(45) NOT NULL,
  `price` int(11) NOT NULL,
  `shipping_time` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shippings`
--

LOCK TABLES `shippings` WRITE;
/*!40000 ALTER TABLE `shippings` DISABLE KEYS */;
/*!40000 ALTER TABLE `shippings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasting_notes`
--

DROP TABLE IF EXISTS `tasting_notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tasting_notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `smell` varchar(45) DEFAULT NULL,
  `taste` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasting_notes`
--

LOCK TABLES `tasting_notes` WRITE;
/*!40000 ALTER TABLE `tasting_notes` DISABLE KEYS */;
INSERT INTO `tasting_notes` VALUES (15,'En nariz predominan aromas a frutos rojos mad','Entrada en boca dulce con taninos redondos, c','De color muy atractivo con matiz violáceo.'),(17,'En nariz, las notas de Malbec se hacen presen','Sus taninos dulces marcan su presencia en boc','Gran intensidad de color, profundo de matiz v'),(18,'Al destapar una botella, nos deleita con una ','De taninos suaves y maduros, con muy buen equ','Color muy atractivo, profundo con destacados '),(19,'Aromas a frutos tropicales y durazno blanco e','Exquisita untuosidad en boca aportada princip','Deleita a los ojos con reflejos verde-limón.'),(20,'Seductor, con fragancias florales y frutales,','En boca es potente, con una acidez refrescant','Impacta a los ojos con reflejos verde-limón.'),(21,'Es un vino joven y por lo tanto expresa toda ','Entrada en boca fresca y voluminosa. De acide','Color verdoso con leves tonalidades doradas.'),(22,'Aromas frutales y florales de gran intensidad','Notas dulces, amigables y frutado. ','Un vino de color verdoso muy seductor y atrap'),(23,'Su intensidad de aromas impresiona por las no','Equilibrada acidez, suave, dulce, chispeante ','Color verdoso con tonos plata muy seductores '),(24,'Al destapar una botella, nos deleita con una ','De taninos suaves y maduros, con muy buen equ','Color muy atractivo, profundo con destacados ');
/*!40000 ALTER TABLE `tasting_notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(80) NOT NULL,
  `date_of_birth` date NOT NULL,
  `avatar` varchar(45) NOT NULL DEFAULT 'default.png',
  `category_id` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_categories_idx` (`category_id`),
  CONSTRAINT `fk_users_categories` FOREIGN KEY (`category_id`) REFERENCES `users_categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Alma','Marino','almamarino@hotmail.com','$2b$12$g98FBvJReCBcKvdCm9LIdOm/diCFjYtgV2SnX95ttevyep1K6WoDy','1996-01-20','default.png',1,'2021-03-24 23:27:36','2021-03-24 23:27:36'),(3,'sergio','Mariño','spmarino@hotmail.com','$2b$12$2/V2gHZB39pV63q.ILfZ5u2Xdm71I9bKdPSQwkQglMGagmgFGoOfq','1992-08-23','avatar-1616632306220.png',2,'2021-03-25 00:31:46','2021-03-25 00:31:46');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_categories`
--

DROP TABLE IF EXISTS `users_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_categories`
--

LOCK TABLES `users_categories` WRITE;
/*!40000 ALTER TABLE `users_categories` DISABLE KEYS */;
INSERT INTO `users_categories` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `users_categories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-26 22:33:55
