-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2024 at 02:06 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.1.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assessment_backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `createdAt`, `updatedAt`) VALUES
(1, 'Hardware', '2024-03-05 16:03:57', '2024-03-05 16:04:54'),
(2, 'Software', '2024-03-05 16:23:39', '2024-03-05 16:23:39'),
(3, 'Furniture', '2024-03-05 16:23:47', '2024-03-05 16:23:47'),
(4, 'Clothes', '2024-03-05 16:24:02', '2024-03-05 16:24:02'),
(5, 'Accessories', '2024-03-06 06:56:45', '2024-03-06 06:56:45'),
(6, 'Grocery', '2024-03-06 06:56:53', '2024-03-06 06:56:53'),
(7, 'Cleaning & Laundry', '2024-03-06 06:57:17', '2024-03-06 06:57:17'),
(8, 'Toys', '2024-03-06 12:56:42', '2024-03-06 12:56:42');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `category_id`, `createdAt`, `updatedAt`) VALUES
(1, 'HDD', 2, '2024-03-05 16:05:52', '2024-03-05 16:33:10'),
(2, 'LPDDR4 Ram', 1, '2024-03-05 16:13:15', '2024-03-05 18:45:36'),
(3, 'T-shirt', 4, '2024-03-05 16:24:40', '2024-03-05 16:24:40'),
(4, 'Washing Powder', 7, '2024-03-06 07:04:00', '2024-03-06 07:04:00'),
(5, 'Table', 3, '2024-03-06 07:05:13', '2024-03-06 07:05:13'),
(6, 'Watch', 5, '2024-03-06 07:05:23', '2024-03-06 07:05:23'),
(7, 'Vegetables', 6, '2024-03-06 07:05:34', '2024-03-06 07:05:34'),
(8, 'Pendrive', 1, '2024-03-06 07:05:48', '2024-03-06 07:05:48'),
(9, 'Adobe Photoshop', 2, '2024-03-06 07:05:58', '2024-03-06 07:05:58'),
(10, 'Formal Shirts', 4, '2024-03-06 07:06:11', '2024-03-06 07:06:11'),
(11, 'Chair', 3, '2024-03-06 07:06:23', '2024-03-06 07:06:23'),
(12, 'Belts', 5, '2024-03-06 07:06:32', '2024-03-06 07:06:32'),
(13, 'Floor Cleaner', 7, '2024-03-06 07:06:43', '2024-03-06 07:06:43'),
(14, 'Memory Card', 1, '2024-03-06 07:07:02', '2024-03-06 07:07:02'),
(15, 'Ms-Office ', 2, '2024-03-06 07:07:17', '2024-03-06 07:07:17'),
(16, 'Cupboard', 3, '2024-03-06 07:07:32', '2024-03-06 07:07:32'),
(17, 'Jeans', 4, '2024-03-06 07:07:40', '2024-03-06 07:07:40'),
(18, 'Perfume', 5, '2024-03-06 07:07:50', '2024-03-06 07:07:50'),
(19, 'Fruits', 6, '2024-03-06 07:08:00', '2024-03-06 07:08:00'),
(20, 'Dish Washing Soap', 7, '2024-03-06 07:08:25', '2024-03-06 07:08:25'),
(21, 'Toy Car', 8, '2024-03-06 13:04:54', '2024-03-06 13:04:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
