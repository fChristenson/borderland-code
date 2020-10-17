import { IOtherTeamListener } from "./models";
import { ProductService } from "./ProductService";
import { ProviderService } from "./ProviderService";
import { ProductRecommendationService } from "./ProductRecommendationService";

// While in the same code base this works well.
export class OtherTeamListener implements IOtherTeamListener {
  private productService: ProductService;
  private recommendationService: ProductRecommendationService;

  constructor(
    productService: ProductService,
    recommendationService: ProductRecommendationService
  ) {
    this.productService = productService;
    this.recommendationService = recommendationService;
  }

  productIsPublic(productId: string): void {
    const product = this.productService.getProduct(productId);
    this.recommendationService.maybeRecommendProduct(product.id, product.id);
  }

  productIsPrivate(productId: string): void {
    const product = this.productService.getProduct(productId);
    this.recommendationService.removeRecommendation(product);
  }
}
