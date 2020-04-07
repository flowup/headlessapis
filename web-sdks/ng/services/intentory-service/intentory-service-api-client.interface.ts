/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './index';
import * as models from '../../models';

export interface IntentoryServiceAPIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  listProducts(
    args: {
      storeId: string,
      productId?: string,
      name?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1ProductList>;

}
