# Тестове завдання

Цей проект був створений за допомогою
[Create React App](https://github.com/facebook/create-react-app). Для знайомства
та налаштування додаткових можливостей
[звернись до документації](https://facebook.github.io/create-react-app/docs/getting-started).

## Мета

Створити картку для одного твіта та додати інтерактивності при клікові на
кнопку.

[how it has to look](./assets/test.JPG)

## Критерії виконання

1. Верстка фіксована в рх, семантична та валідна.
2. Немає помилок в консолі браузера.
3. Робота виконана на React.
4. Інтерактивність працює відповідно до технічного завдання.
5. Код відформатований та без коментарів.

## Технічне завдання

1. Відповідно до
   [макету](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0-1&t=tho8otnk0ZO4Aljh-0)
   потрібно реалізувати картку юзера.
2. При клікові на кнопку Follow - її текст змінюється на Following. Також
   змінюється колір кнопки. А до кількості фоловерів додається і ваш. Тобто,
   початкова кількість складає 100,500 фоловерів. При клікові на кнопку буде
   100,501.
3. При оновлені сторінки має фіксуватись кінцевий результат дій юзера. Тобто,
   якщо клікнути по кнопці і оновити сторінку - то кнопка все рівно залишається
   в стані Following із відповідним кольором, а кількість фоловерів НЕ
   зменшується до початкового значення.
4. При повторному клікові на кнопку її текст та колір змінюються до початкового
   стану. Також змінюється і кількість фоловерів. Вона зменшується на 1
   (100,500).
5. В коді цифра 100,500 має бути прописана одним значенням (100500). В UI -
   виведено через кому (100,500).

## Додатково

1. Можете створити локальну базу даних (окремий файл json) зі слідуючими полями:
   `id`, `user`, `tweets`, `followers`, `avatar` (див. код нижче).
2. Зображення аватарів мають бути прописані окремими url у властивості `avatar`.
   Можете підібрати їх самостійно.
3. Має бути від 3 до 10 юзерів з різними даними (на ваш розсуд) в базі.
4. Відповідно до бази потрібно згенерувати відповідну кількість карток на
   фронт-частині застосунку.
5. Кожна картка має бути незалежною функціонально одна від одної.
6. Решта вимог аналогічні до вищеописаного технічного завдання.

[code example](./assets/code.jpg)
