# Installation

The whole setup is well tested in node >= 8.9.4. Make sure you're using correct version. If you need to switch between versions use NVM (https://github.com/creationix/nvm).

```
nvm use 8.9.4
npm install
```

# Development

To run development server:

```
npm start
```

# Functionality

1. All API requests servered by https://punkapi.com/documentation/v2.
2. Homepage renders 10 beers via API and stores them in redux store.
3. `Load more` button in beers list that fetches more beers.
4. Loading spinner while data is being fetched.
5. Each product in `ProductsList` has `add to cart` button, which appears on `:hover`.
6. `/checkout` page renders list of products in cart.
7. Unit tests.

# Possible extensions

1. Add more data to home page along with a price for each beer.
2. On `/checkout` page enable `quantity` and `total` to pay for items in the cart.
3. Search by name field.
4. Add `delete` from cart button.
5. Change CSS to SCSS.
6. Add more responsive design.

# Issues

Fix not working tests.
