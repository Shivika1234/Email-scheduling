-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 25, 2023 at 03:23 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `email_scheduling`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `age` varchar(3) DEFAULT NULL,
  `added_on` datetime DEFAULT sysdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`name`, `email`, `age`, `added_on`) VALUES
('Mahesh Jain', 'mahesh@gmail.com', '25', '2023-04-25 12:27:52'),
('Falguni Sharma', 'falguni@gmail.com', '35', '2023-04-25 12:29:38'),
('Karuna Patel', 'karuna@gmail.com', '21', '2023-04-25 12:30:22'),
('Aditya Shrivastava', 'aditya@gmail.com', '35', '2023-04-25 12:31:00'),
('Mayur Kumar', 'mayur@gmail.com', '18', '2023-04-25 12:31:36');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `emailto` varchar(100) NOT NULL,
  `subject` varchar(500) DEFAULT NULL,
  `html` varchar(1000) DEFAULT NULL,
  `expression` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`emailto`, `subject`, `html`, `expression`) VALUES
('princijain99@gmail.com', 'scheduled mail', '<strong> Hi, hope this mail finds you in good health <strong>', '* * * * * *');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
