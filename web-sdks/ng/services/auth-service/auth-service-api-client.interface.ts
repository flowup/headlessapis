/* tslint:disable */

import { Observable } from 'rxjs';
import { HttpOptions } from './';
import * as models from '../../models';

export interface AuthServiceAPIClientInterface {

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  signInWithPassword(
    args: {
      body: models.V1EmailPassword,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Customer>;

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  signUpWithPassword(
    args: {
      body: models.V1EmailPassword,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Customer>;

}
