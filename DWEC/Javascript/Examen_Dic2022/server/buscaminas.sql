-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-12-2020 a las 02:17:21
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `buscaminas`
--
CREATE DATABASE IF NOT EXISTS `buscaminas` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `buscaminas`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modos_juego`
--

DROP TABLE IF EXISTS `modos_juego`;
CREATE TABLE `modos_juego` (
  `id` int(11) NOT NULL,
  `nombre` varchar(32) COLLATE utf8_spanish_ci NOT NULL,
  `ancho` int(11) NOT NULL,
  `alto` int(11) NOT NULL,
  `minas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `modos_juego`
--

INSERT INTO `modos_juego` (`id`, `nombre`, `ancho`, `alto`, `minas`) VALUES
(1, 'Beginner', 9, 9, 10),
(2, 'Intermediate', 16, 16, 40),
(3, 'Expert', 30, 16, 99);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntuaciones`
--

DROP TABLE IF EXISTS `puntuaciones`;
CREATE TABLE `puntuaciones` (
  `id` int(11) NOT NULL,
  `modo` int(11) NOT NULL,
  `tiempo` int(11) NOT NULL,
  `nick` varchar(16) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `puntuaciones`
--

INSERT INTO `puntuaciones` (`id`, `modo`, `tiempo`, `nick`) VALUES
(1, 1, 20, 'God'),
(2, 1, 40, 'God'),
(3, 1, 30, 'God'),
(4, 1, 60, 'God'),
(5, 1, 50, 'God'),
(6, 1, 70, 'God'),
(7, 2, 40, 'God'),
(8, 2, 80, 'God'),
(9, 2, 60, 'God'),
(10, 2, 120, 'God'),
(11, 2, 100, 'God'),
(12, 2, 140, 'God'),
(13, 3, 200, 'God'),
(14, 3, 400, 'God'),
(15, 3, 300, 'God'),
(16, 3, 600, 'God'),
(17, 3, 500, 'God'),
(18, 3, 700, 'God');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `modos_juego`
--
ALTER TABLE `modos_juego`
  ADD KEY `id` (`id`);

--
-- Indices de la tabla `puntuaciones`
--
ALTER TABLE `puntuaciones`
  ADD KEY `id` (`id`),
  ADD KEY `modo` (`modo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `modos_juego`
--
ALTER TABLE `modos_juego`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `puntuaciones`
--
ALTER TABLE `puntuaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `puntuaciones`
--
ALTER TABLE `puntuaciones`
  ADD CONSTRAINT `puntuaciones_ibfk_1` FOREIGN KEY (`modo`) REFERENCES `modos_juego` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
