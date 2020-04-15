/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface InventoryServiceAPIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  listProducts(
    args: {
      productId?: string,
      name?: string,
      merchantId?: string,
      storeId?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1ProductList>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getProduct(
    args: {
      productId: string,
      name?: string,
      merchantId?: string,
      storeId?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Product>;

}
