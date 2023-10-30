# Инструкция

При клонировании проекта либо же при скачивании через zip архив, в первым делом установить необходимые пакеты через npm install. После чего обязательно запускать проект через npm start, через npm run dev база данных в файле json не добавляется обьекты отправленные через POST запрос. Поэтому запускать API правильнее всего через npm install.

## HTTP Methods

Во время POST запроса в POSTMAN на эндпоинте `http://localhost:8000/messages` отправляются данные, так же проверены на пустое поле. При этом отправленные данные запишутся в файл db.json. Файл db.json  автоматический появляется при первой отправке из POSTMAN.
```javascript
fs.writeFileSync(fileName, JSON.stringify(data));
```
 ---

Во время GET запроса на эндпоинте  `http://localhost:8000/messages` автоматический появляются отправленные данные из POSTMAN. При этом если количество сообщений будет свыше 30ти, то всегда возвращаются последние 30 новых сообщений по времени.
```javascript
 let lastThirdMessages = data.slice(-30);
 return lastThirdMessages
```
---

Во время  GET запроса на эндпоинте `http://localhost:8000/messages?datetime=2022-08-08T15:37:59.600Z` возвращается список сообщений после этой даты. Происходит это все с помощью метода slice.
```javascript
 const index = data.indexOf(message);
 data.slice(index);
```






