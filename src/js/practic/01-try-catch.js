/**
 * Обробка помилок з try...catch
 *
 * - Синтаксис
 * - Які помилки ловить
 * - ❌ помилки парсингу (parsing errors)
 * - ✅ помилки виконання (runtime errors)
 * - Ловить лише помилки в синхронному коді
 * - Як зловити помилку в асинхронному коді
 * - Об'єкт помилки
 * - name
 * - message
 * - stack
 * - Блок catch без об'єкта помилки
 */

// function create(markup) {
//   try {
//     if (typeof markup !== 'string') {
//       throw new Error('Markup is invalid!');
//     }
//     console.log(markup);
//   } catch {
//     console.log('Some error');
//   }
// }

// create('<h1></h1>');
// create();
