/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './index';
import * as models from '../../models';

export interface OrderServiceAPIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  listOrders(
    args: {
      storeId: string,
      orderId?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1OrderList>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  submitOrder(
    args: {
      storeId: string,
      body: models.V1Order,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Order>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  addToOrder(
    args: {
      storeId: string,
      orderId: string,
      body: models.V1OrderItem,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Order>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  removeFromOrder(
    args: {
      storeId: string,
      orderId: string,
      body: models.V1OrderItem,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Order>;

}
