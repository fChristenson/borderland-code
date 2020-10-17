export interface IProduct {
  id: string;
  providerId: string;
  name: string;
  public: boolean;
}

export interface IProvider {
  id: string;
  name: string;
  public: boolean;
}

export interface IOtherTeamListener {
  productIsPublic(productId: string): void;
  productIsPrivate(productId: string): void;
}
