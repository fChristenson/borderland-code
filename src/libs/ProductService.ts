import { IProduct } from "./models";
import { ProductRecommendationService } from "./ProductRecommendationService";
import { ProviderService } from "./ProviderService";

export class ProductService {
  private productRecommendationService: ProductRecommendationService;
  private providerService: ProviderService;

  constructor(
    productRecommendationService: ProductRecommendationService,
    providerService: ProviderService
  ) {
    this.productRecommendationService = productRecommendationService;
    this.providerService = providerService;
  }

  getProduct(productId: string): IProduct {
    return {
      id: "1",
      providerId: "12",
      public: true,
      name: "foo",
    };
  }

  createProduct(product: IProduct) {
    // create product
    const provider = this.providerService.getProvider(product.providerId);
    // The bug started here because the other team did not know that a provider could be private
    this.productRecommendationService.maybeRecommendProduct(
      product.id,
      provider.id
    );
  }

  deleteProduct(product: IProduct) {
    // delete product
    this.productRecommendationService.removeRecommendation(product);
  }
}
