export const addItemToBasket = (basketItems, basketItemToAdd) => {
  const existingbasketItem = basketItems.find(
    (basketItem) => basketItem.added === basketItemToAdd.added
  );

  if (existingbasketItem) {
    return basketItems.map((basketItem) =>
      basketItem.added === basketItemToAdd.added
        ? { ...basketItem, quantity: basketItem.quantity + 1 }
        : basketItem
    );
  }

  return [...basketItems, { ...basketItemToAdd, quantity: 1 }];
};

export const removeItemFromBasket = (basketItems, basketItemToRemove) => {
  const existingbasketItem = basketItems.find(
    (basketItem) => basketItem.added === basketItemToRemove.added
  );

  if (existingbasketItem.quantity === 1) {
    return basketItems.filter(
      (basketItem) => basketItem.added !== basketItemToRemove.added
    );
  }

  return basketItems.map((basketItem) =>
    basketItem.added === basketItemToRemove.added
      ? { ...basketItem, quantity: basketItem.quantity - 1 }
      : basketItem
  );
};
