/* tslint:disable */
import {
  V1Product,
} from './index';

export interface V1OrderItem {
  count?: number;
  orderId?: string;
  product?: V1Product;
  storeId?: string;
}
