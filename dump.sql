-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 25 2021 г., 02:55
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `donutmaraphon`
--

-- --------------------------------------------------------

--
-- Структура таблицы `maraphon`
--

CREATE TABLE `maraphon` (
  `ID` int(11) NOT NULL,
  `ROCK_POSITION` int(11) NOT NULL,
  `JUMP_POSITION` int(11) NOT NULL,
  `ROCK_SIZE` int(11) NOT NULL,
  `IS_WIN` tinyint(1) NOT NULL,
  `RUN_TIME` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `maraphon`
--

INSERT INTO `maraphon` (`ID`, `ROCK_POSITION`, `JUMP_POSITION`, `ROCK_SIZE`, `IS_WIN`, `RUN_TIME`) VALUES
(1, 685, 556, 42, 1, 5200),
(2, 685, 556, 42, 1, 5305),
(3, 863, 750, 44, 1, 37100),
(4, 821, 694, 49, 1, 5193),
(5, 586, 462, 60, 1, 21604),
(6, 581, 456, 73, 1, 19401),
(7, 850, 732, 41, 1, 5201),
(8, 820, 696, 74, 1, 5203),
(9, 591, 476, 52, 1, 12504),
(10, 579, 454, 42, 1, 8101),
(11, 656, 534, 80, 1, 5193),
(12, 325, 200, 75, 1, 7887),
(13, 633, 520, 43, 1, 7196),
(14, 279, 156, 79, 1, 5200),
(15, 767, 656, 55, 1, 5205),
(16, 416, 296, 68, 1, 5201),
(17, 552, 436, 49, 1, 5207),
(18, 704, 576, 56, 1, 5201),
(19, 384, 256, 60, 1, 5210),
(20, 340, 216, 76, 1, 5203),
(21, 767, 656, 54, 1, 5211),
(22, 327, 216, 52, 1, 5207),
(23, 832, 716, 70, 1, 5201),
(24, 446, 336, 47, 1, 5201),
(25, 606, 496, 77, 1, 5199),
(26, 567, 456, 75, 1, 5195),
(27, 346, 234, 84, 1, 5192),
(28, 649, 536, 63, 1, 5210),
(29, 641, 516, 83, 1, 5207),
(30, 861, 744, 74, 1, 5199),
(31, 769, 656, 61, 1, 5191),
(32, 634, 516, 84, 1, 5203),
(33, 788, 676, 82, 1, 5204),
(34, 787, 676, 59, 1, 5206),
(35, 410, 296, 40, 1, 5208),
(36, 431, 316, 58, 1, 5202),
(37, 710, 596, 79, 1, 5299),
(38, 812, 694, 59, 1, 5309),
(39, 482, 368, 42, 1, 5792),
(40, 626, 512, 70, 1, 111401),
(41, 527, 416, 58, 1, 5199),
(42, 649, 536, 75, 1, 5203),
(43, 496, 376, 77, 1, 5213),
(44, 884, 756, 77, 1, 5211),
(45, 281, 156, 52, 1, 5200),
(46, 398, 276, 53, 1, 16687),
(47, 731, 276, 67, 1, 1003);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `maraphon`
--
ALTER TABLE `maraphon`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `maraphon`
--
ALTER TABLE `maraphon`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
