import { IProduct, IOtherTeamListener } from "./models";

export class ProductServiceV2 {
  private otherTeamListener: IOtherTeamListener;

  // We could now remove the logic of the other team and use an event system instead
  constructor(otherTeamListener: IOtherTeamListener) {
    this.otherTeamListener = otherTeamListener;
  }

  getProduct(productId: string): IProduct {
    return {
      id: "1",
      providerId: "12",
      public: true,
      name: "foo",
    };
  }

  getProductForProvider(providerId: string): IProduct[] {
    return [];
  }

  createProduct(product: IProduct) {
    // create product
    this.otherTeamListener.productIsPublic(product.id);
  }

  deleteProduct(product: IProduct) {
    // delete product
    this.otherTeamListener.productIsPrivate(product.id);
  }
}
