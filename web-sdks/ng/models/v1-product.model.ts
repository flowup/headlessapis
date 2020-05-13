/* tslint:disable */

export interface V1Product {
  attributes?: { [key: string]: string };
  description?: string;
  images?: string[];
  labels?: { [key: string]: string };
  merchantId?: string;
  name?: string;
  productId?: string;
  storeId?: string;
}
