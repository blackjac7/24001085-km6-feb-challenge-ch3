# Car API

This API provides endpoints to manage car data.

## Let's get started

1. FIRST, clone this repo > `$ git clone https://github.com/blackjac7/24001085-km6-feb-challenge-ch3.git`
2. SECOND, change dir to repo dir > `$cd 24001085-km6-feb-challenge-ch3`
3. AND LASTLY, install the packages > `$npm install`

Run it with nodemon (npm run dev) or others.

> if you want to check, visit [http://localhost:3000](http://localhost:3000 "http://localhost:3000")

## Router

| Router       | Method   | Description                            |
| :----------- | :------- | :------------------------------------- |
| `'/'`        | `-`      | It's public directory for landing page |
| `'/cars`     | `GET`    | Get all cars                           |
| `'/cars/:id` | `GET`    | Get car by id                          |
| `'/cars`     | `POST`   | Create new car                         |
| `'/cars/:id` | `PUT`    | Update car by id                       |
| `'/cars/:id` | `PATCH`  | Partial update car by id               |
| `'/cars/:id` | `DELETE` | Delete car by id                       |
