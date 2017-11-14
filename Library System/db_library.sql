-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 13, 2017 at 06:41 PM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_library`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_book`
--

CREATE TABLE `tbl_book` (
  `Bid` varchar(5) NOT NULL,
  `Badid` int(5) NOT NULL,
  `Bchid` int(5) NOT NULL,
  `Bname` varchar(20) NOT NULL,
  `Bcourse` varchar(20) NOT NULL,
  `Bsem` int(1) NOT NULL,
  `Bauther` varchar(20) NOT NULL,
  `Bprice` int(5) NOT NULL,
  `Bqty` int(4) NOT NULL,
  `Bpnlty` int(3) NOT NULL,
  `Bstatus` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_book`
--

INSERT INTO `tbl_book` (`Bid`, `Badid`, `Bchid`, `Bname`, `Bcourse`, `Bsem`, `Bauther`, `Bprice`, `Bqty`, `Bpnlty`, `Bstatus`) VALUES
('B1', 1, 1, 'Asp .net', 'TYBCA', 5, 'Jourge Shawn', 250, 17, 5, 1),
('B2', 1, 1, 'Operating System', 'SYBCA', 6, 'Galvin', 200, 40, 2, 1),
('B3', 1, 1, 'Organi. And Tech.', 'FYBBA', 2, 'Pushpak Mehta', 120, 43, 2, 1),
('B4', 3, 1, 'RDBMS', 'SYBCA', 4, 'Robert Downy', 230, 40, 3, 1),
('B5', 1, 1, 'Accounting', 'SYBCOM', 4, 'Hari Das', 120, 40, 2, 1),
('B6', 1, 1, 'Law Of India', 'FYLLB', 2, 'Bakshichand', 310, 60, 4, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_issue`
--

CREATE TABLE `tbl_issue` (
  `Iid` varchar(5) NOT NULL,
  `Iisby` int(5) NOT NULL,
  `Bid` varchar(6) NOT NULL,
  `Lid` int(5) NOT NULL,
  `Isdate` date NOT NULL,
  `Rdate` date NOT NULL,
  `Ibstatus` int(1) NOT NULL,
  `Istatus` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_issue`
--

INSERT INTO `tbl_issue` (`Iid`, `Iisby`, `Bid`, `Lid`, `Isdate`, `Rdate`, `Ibstatus`, `Istatus`) VALUES
('IS1', 1, 'B1', 1001, '2017-11-10', '2017-11-25', 1, 1),
('IS2', 1, 'B1', 1002, '2017-11-07', '2017-11-12', 1, 1),
('IS3', 1, 'B1', 1002, '2017-11-01', '2017-11-10', 0, 1),
('IS4', 1, 'B3', 1005, '2017-11-04', '2017-11-09', 0, 1),
('IS5', 1, 'B1', 1002, '2017-11-13', '2017-11-18', 1, 1),
('IS6', 1, 'B3', 1004, '2017-11-12', '2017-11-17', 1, 1),
('IS7', 1, 'B3', 1005, '2017-11-13', '2018-11-18', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_operator`
--

CREATE TABLE `tbl_operator` (
  `Oid` int(5) NOT NULL,
  `Oname` varchar(20) NOT NULL,
  `Ogender` varchar(6) NOT NULL,
  `Obdate` date NOT NULL,
  `Omono` varchar(10) NOT NULL,
  `Oemail` varchar(50) NOT NULL,
  `Opasswd` varchar(13) NOT NULL,
  `Ostatus` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_operator`
--

INSERT INTO `tbl_operator` (`Oid`, `Oname`, `Ogender`, `Obdate`, `Omono`, `Oemail`, `Opasswd`, `Ostatus`) VALUES
(1, 'Rakesh Nikumbh', 'Male', '1995-09-20', '8733097092', 'nikumbhrakesh17@gmail.com', 'RKnikumbh123', 1),
(2, 'Ajay Kumbhare', 'Male', '1997-06-30', '8733097092', 'ajaykumbhare@gmail.com', 'ajay123', 1),
(4, 'Kavita Jain', 'Female', '1997-11-20', '2356897845', 'kavita@gmail.com', 'kavita123', 1),
(5, 'Zoya Khan', 'Female', '1994-07-26', '7889455645', 'zoya123@gmail.com', 'zoya123', 1),
(6, 'Siya Arora', 'Male', '1995-10-24', '8733097092', 'siya@gmail.com', 'siya123', 1),
(8, 'Deny Ahuja', 'Male', '1998-11-24', '1234567891', 'daya@gmail.com', 'Deny123', 1),
(9, 'Sneha Jha', 'Female', '2000-11-30', '8799326545', 'sneha@gmail.com', 'sneha123', 1),
(10, 'Jayesh Sharma', 'Male', '1995-11-07', '7878454556', 'jayesh@gmail.com', 'jayesh123', 1),
(11, 'Sagar Jain', 'Male', '1994-03-12', '7845258574', 'sagar@gmail.com', 'Sagar123', 1),
(12, 'Jaya Kriplani', 'Female', '1990-04-17', '9898787458', 'jaya@gmail.com', 'Jaya123', 0),
(13, 'Alpesh Nikumbh', 'Male', '2000-12-08', '7878898956', 'alpeshnikumbh786@gmail.com', 'ALnikumbh123', 1),
(14, 'Kishor Jadhav', 'Male', '1992-07-28', '9909018286', 'kishorjadhav@gmail.com', 'jadhav123', 1),
(15, 'Danish Mehta', 'Male', '1993-07-14', '7845784512', 'danish@gmail.com', 'danish123', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_payment`
--

CREATE TABLE `tbl_payment` (
  `Pid` int(5) NOT NULL,
  `Pisid` int(5) NOT NULL,
  `Lid` int(5) NOT NULL,
  `Pamt` int(5) NOT NULL,
  `Pdate` date NOT NULL,
  `Pstatus` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_payment`
--

INSERT INTO `tbl_payment` (`Pid`, `Pisid`, `Lid`, `Pamt`, `Pdate`, `Pstatus`) VALUES
(1, 1, 1002, 15, '2017-11-13', 1),
(2, 2, 1005, 8, '2017-10-13', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_student`
--

CREATE TABLE `tbl_student` (
  `Lid` int(4) NOT NULL,
  `Sadid` int(5) NOT NULL,
  `Schid` int(5) NOT NULL,
  `Sname` varchar(20) NOT NULL,
  `Svalid` date NOT NULL,
  `Sstd` varchar(15) NOT NULL,
  `Ssem` int(1) NOT NULL,
  `Sdiv` varchar(1) NOT NULL,
  `Scont` varchar(10) NOT NULL,
  `Sisscnt` int(1) NOT NULL,
  `Spandpay` int(4) NOT NULL,
  `Sstatus` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_student`
--

INSERT INTO `tbl_student` (`Lid`, `Sadid`, `Schid`, `Sname`, `Svalid`, `Sstd`, `Ssem`, `Sdiv`, `Scont`, `Sisscnt`, `Spandpay`, `Sstatus`) VALUES
(1001, 1, 1, 'Divyesh Mishra', '2018-11-01', 'FYBCA', 2, 'A', '8799687848', 1, 0, 1),
(1002, 1, 1, 'Sagar Dharma', '2018-11-11', 'SYLLB', 3, 'A', '8733097092', 3, 0, 1),
(1003, 1, 1, 'Dinesh Mehta', '2018-11-11', 'FYBBA', 2, 'A', '7878964512', 0, 0, 0),
(1004, 1, 1, 'Kavita Jain', '2018-11-11', 'TYBCOM', 6, 'C', '9898457545', 1, 0, 1),
(1005, 1, 1, 'Girish Menon', '2018-11-11', 'FYBCA', 2, 'B', '7878898958', 2, 0, 1),
(1006, 1, 1, 'Kishor Jadhav', '2018-11-13', 'SYBA', 3, 'B', '9909018286', 0, 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_book`
--
ALTER TABLE `tbl_book`
  ADD UNIQUE KEY `Bid` (`Bid`),
  ADD KEY `fk_baddid` (`Badid`),
  ADD KEY `fk_bchid` (`Bchid`);

--
-- Indexes for table `tbl_issue`
--
ALTER TABLE `tbl_issue`
  ADD PRIMARY KEY (`Iid`),
  ADD KEY `fk_Bid` (`Bid`),
  ADD KEY `fk_Sid` (`Lid`);

--
-- Indexes for table `tbl_operator`
--
ALTER TABLE `tbl_operator`
  ADD PRIMARY KEY (`Oid`);

--
-- Indexes for table `tbl_payment`
--
ALTER TABLE `tbl_payment`
  ADD PRIMARY KEY (`Pid`);

--
-- Indexes for table `tbl_student`
--
ALTER TABLE `tbl_student`
  ADD PRIMARY KEY (`Lid`),
  ADD KEY `fk_admin` (`Sadid`),
  ADD KEY `FK_chid` (`Schid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_operator`
--
ALTER TABLE `tbl_operator`
  MODIFY `Oid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `tbl_payment`
--
ALTER TABLE `tbl_payment`
  MODIFY `Pid` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tbl_student`
--
ALTER TABLE `tbl_student`
  MODIFY `Lid` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1007;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_book`
--
ALTER TABLE `tbl_book`
  ADD CONSTRAINT `fk_bchid` FOREIGN KEY (`Bchid`) REFERENCES `tbl_operator` (`Oid`);

--
-- Constraints for table `tbl_issue`
--
ALTER TABLE `tbl_issue`
  ADD CONSTRAINT `fk_Sid` FOREIGN KEY (`Lid`) REFERENCES `tbl_student` (`Lid`);

--
-- Constraints for table `tbl_student`
--
ALTER TABLE `tbl_student`
  ADD CONSTRAINT `FK_chid` FOREIGN KEY (`Schid`) REFERENCES `tbl_operator` (`Oid`),
  ADD CONSTRAINT `fk_admin` FOREIGN KEY (`Sadid`) REFERENCES `tbl_operator` (`Oid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
