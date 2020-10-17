import { IProduct } from "./models";
import { ProductService } from "./ProductService";
import { ProviderService } from "./ProviderService";

export class ProductRecommendationService {
  private productService: ProductService;
  private providerService: ProviderService;

  constructor(
    productService: ProductService,
    providerService: ProviderService
  ) {
    this.productService = productService;
    this.providerService = providerService;
  }

  maybeRecommendProduct(productId: string, providerId: string) {
    const product = this.productService.getProduct(productId);
    const provider = this.providerService.getProvider(providerId);
    if (product.public && provider.public) {
      // recommend product to user
    }
  }

  removeRecommendation(product: IProduct) {
    // remove
  }
}
