/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface OrderServiceAPIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  listOrders(
    args: {
      orderId?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1OrderList>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  submitOrder(
    args: {
      body: models.V1Order,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Order>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  addItemToOrder(
    args: {
      orderId: string,
      body: models.V1OrderItem,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Order>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  removeItemFromOrder(
    args: {
      orderId: string,
      body: models.V1OrderItem,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Order>;

}
