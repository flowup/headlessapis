/* tslint:disable */
import {
  V1Amount,
  V1Product,
} from '.';

export interface V1StoreItem {
  amount?: V1Amount;
  count?: number;
  created_at?: string;
  inventory_id?: string;
  merchant_id?: string;
  product?: V1Product;
  product_id?: string;
}
