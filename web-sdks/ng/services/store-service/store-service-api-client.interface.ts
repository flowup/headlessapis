/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface StoreServiceAPIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getStore(
    args: {
      merchantId: string,
      storeId: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Store>;

}
