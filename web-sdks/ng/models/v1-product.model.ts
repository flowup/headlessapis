/* tslint:disable */

export interface V1Product {
  attributes?: { [key: string]: string };
  description?: string;
  images?: string[];
  labels?: { [key: string]: string };
  merchant_id?: string;
  name?: string;
  product_id?: string;
}
