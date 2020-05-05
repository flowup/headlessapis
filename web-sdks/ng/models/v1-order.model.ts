/* tslint:disable */
import {
  V1OrderItem,
} from '.';

export interface V1Order {
  items?: V1OrderItem[];
  orderId?: string;
  status?: string;
}
