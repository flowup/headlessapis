/* tslint:disable */
import {
  V1Amount,
  V1Product,
} from '.';

export interface V1StoreItem {
  amount?: V1Amount;
  count?: number;
  createdAt?: string;
  inventoryId?: string;
  merchantId?: string;
  product?: V1Product;
  storeItemId?: string;
}
