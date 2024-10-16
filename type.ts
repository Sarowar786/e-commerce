export interface ProductType {
    availabilityStatus: string;
    brand: string;
    category: string;
    description: string;
    dimensions: {
      depth: number;
      height: number;
      width: number;
    };
    discountPercentage: number;
    id: number;
    images: string[];
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
    minimumOrderQuantity: number;
    price: number;
    rating: number;
    returnPolicy: string;
    reviews: object[];
    shippingInformation: string;
    sku: string;
    stock: number;
    tags: string[];
    thumbnail: string;
    title: string;
    warrantyInformation: string;
    weight: number;
    quantity?: number;
  }
  
  export interface StateType {
    shofy: {
      cart: ProductType[];
      favorite: ProductType[];
      userInfo: any;
    };
  }

  export interface Review{
    comment: string;
    reviewerName: string;
    reviewerEmail: string;  // Ensure this matches the actual data structure
    rating: number;
  };
  