# Daniel Wellington-challenge

- Fetch products

### Endpoints

- GET /daniel-wellington-products

### Request

### GET /daniel-wellington-products

Request example:

```sh
GET http://localhost:5000/daniel-wellington-products
Content-Type: application/json
```

### Response

### GET /daniel-wellington-products

```sh
Status code: 200 OK
{
  "ok": true,
  "products": [
    {
      "name": "Classic Oxford 40 Rose Gold",
      "color": "Rose Gold",
      "price": "159 €",
      "image": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-oxford-rg_1_1.png"
    },
    {
      "name": "Classic Canterbury 40 Rose Gold",
      "color": "Rose Gold",
      "price": "159 €",
      "image": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-canterbury-rg_2.png"
    },
    {
      "name": "Classic Cambridge 40 Rose Gold",
      "color": "Rose Gold",
      "price": "159 €",
      "image": "https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-cambridge-rg_1.png"
    },
  ]
}
```

### Before get started

### Build the app

Open your terminal and run the following commands

```sh
$ cd daniel-wellington-challenge/frontend
$ npm install
```

```sh
$ cd daniel-wellington-challenge/backend
$ npm install
```

### Start the App

Open your terminal and run the following commands

```sh
$ cd daniel-wellington-challenge/backend
$ npm start
```

```sh
$ cd daniel-wellington-challenge/frontend
$ npm start
```

Open your browser on [http://localhost:3000/] and have fun!!!

[//]: #
[http://localhost:3000/]: http://localhost:3000/
