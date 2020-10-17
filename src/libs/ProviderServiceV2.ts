import { IProvider, IOtherTeamListener } from "./models";
import { ProductServiceV2 } from "./ProductServiceV2";

export class ProviderServiceV2 {
  private productService: ProductServiceV2;
  private otherTeamListener: IOtherTeamListener;

  constructor(
    productService: ProductServiceV2,
    otherTeamListener: IOtherTeamListener
  ) {
    this.productService = productService;
    this.otherTeamListener = otherTeamListener;
  }
  getProvider(providerId: string): IProvider {
    return {
      id: "string",
      name: "string",
      public: true,
    };
  }

  setProviderState(providerId: string, isPublic: boolean) {
    // toggle provider state
    if (isPublic) {
      const products = this.productService.getProductForProvider(providerId);
      products
        .filter((p) => p.public)
        .forEach((p) => this.otherTeamListener.productIsPublic(p.id));
    } else {
      const products = this.productService.getProductForProvider(providerId);
      products.forEach((p) => this.otherTeamListener.productIsPrivate(p.id));
    }
  }
}
