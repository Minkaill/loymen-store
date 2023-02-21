# ⭐️ LOYMEN ⭐️

Web - приложение(интернет магазин) разработанный для магазина LOYMEN

## 🔥 Функционал приложения:

- Компоненты, страницы, сортировка, поиск, пагинация, фильтрация и т.д.
- Взаимодействовать с серверной частью, отправка запросов на бэкенд.
- Навигация по страницам без перезагрузки.
- Глобальное хранилище данных для всего приложения.
- LocalStorage для хранения настроек сайта.
- Lazy Loading + debounce (оптимизацию для поиска товаров).
- и т.д.

# 🛠 Технологии:

- **ReactJS 18**
- **Strapi**
- **Redux Toolkit** (хранение данных)
- **React Router v6** (навигация)
- **Axios + Fetch** (отправка запроса на бэкенд)
- **React Hooks** (хуки)
- **Prettier** (форматирование кода)
- CSS-Modules / SCSS (стилизация)
- React Content Loader (скелетон)
- React Pagination (пагинация)
- Lodash.Debounce

### Подробнее о технологиях


- **[Redux Toolkit](https://redux-toolkit.js.org/)** — с помощью данной библиотеки, мы сможем создать глобальное хранилище данных для нашего приложения, тем самым, более удобным способом обмениваться информацией между разными компонентами нашего приложения. Данная библиотека активно внедряется во все крупные и малые react-проекты на 2021-2022 г.
- **[React Router v6](https://reactrouter.com/docs/en/v6/getting-started/overview)** — позволит нам создать навигацию по нашему сайту без перезагрузок страницы. Ты, наверное, обратил внимание, что сайт VK или Instagram при переходе по разным разделам, не перезагружает всю страницу, а только определенную часть сайта. Именно эту возможность мы и будем внедрять в наше приложение с помощью React Router.
- **[Axios](https://github.com/axios/axios)** — нам поможет взаимодействовать с серверной частью. Отправлять данные на сервер или получать их при необходимости из сервера уже в наше фронтенд-приложение.
- **[React Hooks](https://ru.reactjs.org/docs/hooks-intro.html)** — это набор готовых функций внутри библиотеки React для решения разнообразных задач, например, хранение данных, определение первого отображения приложения, оптимизаций функций и т.п.
- **[Prettier](https://prettier.io/)** — наш код должен быть не только хорошо написано, но и **красиво**. С помощью Prettier наш код будет автоматически выровняться внутри нашего редактора кода, тем самым, становиться более читабельным.
- **[SCSS](https://sass-scss.ru/)** — это тот же CSS, но с более мощными возможностями, функциями, переменными, циклами (да, Карл, циклы в CSS) и кучей других крутых решений.
- **[CSS-Modules](https://github.com/css-modules/css-modules)** — мы будем использовать SCSS вместе с CSS-модулями. По факту, тебе не придётся учить ничего нового. Ты будешь писать те же самые стили, но уже в отдельных файлах (css-модулях), тем самым, инкапсулируя свои CSS-классы.
- **[Lodash](https://lodash.com/docs)** — набор готовых JS-функций для огромного количества разнообразных задач.
- - **[Strapj](https://strapi.io/)** — это Headless CMS с открытым исходным кодом. Она предоставляет готовую административную панель, бэкенд и API для вашего фронтенд-приложения, что позволяет подключить систему управления контентом без привлечения бэкенд-специалистов.

# 👀 С чего начать?

1. Установить редактор кода **[Visual Studio Code](https://code.visualstudio.com/)**
2. Установить [NodeJS](https://nodejs.org/en/)
3. Для начала устанавливаем необходимые зависимости в корневой, frontend и backend папках
yarn install
4. Запускаем проект из корневой папки скриптом
yarn develop
5. Начать разработку.
