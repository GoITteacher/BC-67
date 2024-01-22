/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

class Timer {}

const startBtn = document.querySelector('button[data-action-start]');
const stopBtn = document.querySelector('button[data-action-stop]');
const clockface = document.querySelector('.js-clockface');

/*
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них вміщається годин/хвилин/секунд
 * - Рисує інтерфейс
 */
