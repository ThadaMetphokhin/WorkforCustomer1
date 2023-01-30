-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2023 at 07:59 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `roomforrent`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `ID` int(11) NOT NULL,
  `User` varchar(30) NOT NULL,
  `Pass` varchar(10) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Auth` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`ID`, `User`, `Pass`, `Name`, `Auth`) VALUES
(1, 'Admin', '123', 'ChangThai', 'QWRtaW4=');

-- --------------------------------------------------------

--
-- Table structure for table `ordermeetingroom`
--

CREATE TABLE `ordermeetingroom` (
  `ID` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Price` varchar(1000) NOT NULL,
  `Des` varchar(100) NOT NULL,
  `Img` varchar(1000) NOT NULL,
  `date` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ordermeetingroom`
--

INSERT INTO `ordermeetingroom` (`ID`, `Name`, `Price`, `Des`, `Img`, `date`) VALUES
(2, 'ห้องประชุม 2', '500', '', 'http://localhost:4000/roomimage/room2.jpg', ''),
(3, 'ห้องประชุม 3', '200', '', 'http://localhost:4000/roomimage/room3.jpg', ''),
(4, 'ห้องประชุม 4', '100', '', 'http://localhost:4000/roomimage/room4.jpg', ''),
(5, 'aba1', '67890', 'value is not demand', 'http://localhost:4000/roomimage/laptops-g148f15da7_640.jpg', '');

-- --------------------------------------------------------

--
-- Table structure for table `orderroom`
--

CREATE TABLE `orderroom` (
  `ID` int(11) NOT NULL,
  `Name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderroom`
--

INSERT INTO `orderroom` (`ID`, `Name`) VALUES
(1, 'ห้องประชุม 1'),
(2, 'ห้องประชุม 2'),
(3, 'ห้องประชุม 3'),
(4, 'ห้องประชุม 4');

-- --------------------------------------------------------

--
-- Table structure for table `rentroomhistory`
--

CREATE TABLE `rentroomhistory` (
  `ID` int(11) NOT NULL,
  `Roomname` int(20) NOT NULL,
  `Name` int(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `Email` int(50) NOT NULL,
  `Phone` int(10) NOT NULL,
  `BorrowItems` int(100) NOT NULL,
  `Day` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `ordermeetingroom`
--
ALTER TABLE `ordermeetingroom`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `orderroom`
--
ALTER TABLE `orderroom`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `rentroomhistory`
--
ALTER TABLE `rentroomhistory`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ordermeetingroom`
--
ALTER TABLE `ordermeetingroom`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orderroom`
--
ALTER TABLE `orderroom`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `rentroomhistory`
--
ALTER TABLE `rentroomhistory`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
