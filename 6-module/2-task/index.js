import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  product;

  constructor(product) {
    this.product = product;
    this.elem = this.render();
    this.addProduct(product);
  }

  render() {
    this.table = createElement(`
      <div class="card">
        <div class="card__top">
            <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
            <span class="card__price">€${this.product['price'].toFixed(2)}</span>
        </div>
        <div class="card__body">
            <div class="card__title">${this.product['name']}</div>
            <button type="button" class="card__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
      </div>
    `);

    return this.table;
  }

  addProduct(product) {
    this.table.addEventListener("click", function(event) {
      this.addButton = event.target.closest('.card__button');
      if (this.addButton) {
        this.productAddEvent = new CustomEvent("product-add", {
          bubbles: true,
          detail: product.id
        });

        this.addButton.dispatchEvent(this.productAddEvent);
      }
    });

    this.table.addEventListener("product-add", function(event) {
      console.log('add', event.detail);
    });
  }
}
