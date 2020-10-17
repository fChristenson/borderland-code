import { IProvider } from "./models";

export class ProviderService {
  getProvider(providerId: string): IProvider {
    return {
      id: "string",
      name: "string",
      public: true,
    };
  }

  setProviderState(isPublic: boolean) {
    // toggle provider state
    if (!isPublic) {
      // now all public products need to be made private
    }
  }
}
