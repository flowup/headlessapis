/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface InventoryItemServiceAPIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  listProducts(
    args: {
      merchantId: string,
      storeId: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1StoreItemList>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getProduct(
    args: {
      merchantId: string,
      storeId: string,
      productId: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1StoreItem>;

}
