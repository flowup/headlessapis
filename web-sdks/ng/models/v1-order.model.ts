/* tslint:disable */
import {
  V1OrderItem,
} from './index';

export interface V1Order {
  items?: V1OrderItem[];
  orderId?: string;
  storeId?: string;
}
