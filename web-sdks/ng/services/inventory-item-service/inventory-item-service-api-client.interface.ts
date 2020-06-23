/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface InventoryItemServiceAPIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  listStoreItems(
    args: {
      merchantId: string,
      storeId: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1StoreItemList>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getItem(
    args: {
      merchantId: string,
      storeId: string,
      itemId: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1StoreItem>;

}
