function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = `${pricePerDroid * quantity}`;
  if (totalPrice > customerCredits) {
    return `Insufficient funds!`;
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}
