/* tslint:disable */
import {
  V1OrderItem,
} from '.';

export interface V1Order {
  items?: V1OrderItem[];
  order_id?: string;
  status?: string;
}
