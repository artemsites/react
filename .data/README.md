Закладки:
  React JS Быстрый Курс 2020
    https://youtu.be/xJZa2_aldDs
  React Hooks - Полный Курс
    https://youtu.be/9KJxaFHotqI
  React Suspense
    https://youtu.be/IU6WpNSSNOI
  React JS + TypeScript
    https://youtu.be/OvLWWvjoi8s
  50 вопросов на React JS собеседование
    https://youtu.be/-cZOdWjFwXw
  React JS - Приложение целиком
    https://youtu.be/V1rhxheJg4A
  Fullstack приложение за 3 часа
    https://youtu.be/ivDjWYcKDZI

Димыч React путь самурая
  18. Уроки React JS (страница Dialogs) - react курсы бесплатно
    https://www.youtube.com/watch?v=-mDs48HB3II&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8

Docs остановился тут:
  react js: 
    https://ru.reactjs.org/docs/context.html#contextconsumer

  react-router-dom
    https://github.com/remix-run/react-router/blob/main/docs/getting-started/installation.md


  
Теория
  Состояние === интерактивность

  Что должно храниться в состоянии? Задайте себе три вопроса:
    1 Передаются ли они от родителя через пропсы? Если так, тогда эти данные не должны храниться в состоянии компонента.
    2 Остаются ли они неизменными со временем? Если так, тогда их тоже не следует хранить в состоянии.
    3 Можете ли вы вычислить их на основании любых других данных в своём компоненте или пропсов? Если так, тогда это тоже не состояние.
      Ответ:
        1 Исходный список товаров передаётся через пропсы, так что не нужно хранить его в состоянии компонента. 
        2 Поисковый запрос и состояние чекбокса изменяются со временем, и их нельзя вычислить из других данных, так что они вполне сойдут за состояние. 
        3 Напоследок, отфильтрованный список товаров не является состоянием, так как его можно вычислить из оригинального списка, поискового запроса и значения чекбокса.
          В итоге, состоянием являются:
            Поисковый запрос, введённый пользователем
            Значение чекбокса
  
Debug 
  https://github.com/facebook/react/tree/main/packages/react-devtools
  npx react-devtools

Разработка
  ```
  npm start
  ```
Сборка
  ```
  npm run build
  ```
