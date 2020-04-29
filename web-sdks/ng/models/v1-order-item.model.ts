/* tslint:disable */
import {
  V1Product,
} from '.';

export interface V1OrderItem {
  count?: number;
  order_id?: string;
  product?: V1Product;
}
