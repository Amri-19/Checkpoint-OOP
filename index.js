
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
  
    getTotal() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
  
    displayCart() {
      this.items.forEach(item => {
        console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice().toFixed(2)}`);
      });
      console.log(`Total Cart Price: $${this.getTotal().toFixed(2)}`);
    }
  }
  
  
  const apple = new Product(1, 'Apple', 0.99);
  const banana = new Product(2, 'Banana', 1.29);
  const orange = new Product(3, 'Orange', 0.89);
  

  const cart = new ShoppingCart();
  
 
  cart.addItem(apple, 5);
  cart.addItem(banana, 3);
  cart.addItem(orange, 2);
  
  
  cart.displayCart(); 
  

  cart.removeItem(2); 
  
  cart.displayCart(); 
  