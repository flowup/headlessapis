/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './index';
import { USE_DOMAIN, USE_HTTP_OPTIONS, IntentoryServiceAPIClient } from './intentory-service-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedIntentoryServiceAPIClient extends IntentoryServiceAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  listProducts(
    args: {
      storeId: string,
      productId?: string,
      name?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1ProductList> {
    return super.listProducts(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isV1ProductList(res) || console.error(`TypeGuard for response 'V1ProductList' caught inconsistency.`, res)));
  }

}
