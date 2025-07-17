const { addToCart, getStoreItems } = require('./shopping.js');

test('getStoreItems returns all items with correct prices', () => {
    expect(getStoreItems()).toEqual([
      { item: 'lettuce',       price: 1.0 },
      { item: 'tomato',        price: 1.5 },
      { item: 'bacon',         price: 2.5 },
      { item: 'buns',          price: 2.0 },
      { item: 'avocado',       price: 3.5 },
      { item: 'sourpatchkids', price: 2.5 },
      { item: 'mayo',          price: 1.0 }
    ]);
  });
  
  test('addToCart returns out‑of‑stock message for unknown item', () => {
    expect(addToCart('cereal')).toBe('Item "cereal" is out of stock.');
  });
