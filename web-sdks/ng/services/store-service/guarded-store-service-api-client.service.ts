/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, StoreServiceAPIClient } from './store-service-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedStoreServiceAPIClient extends StoreServiceAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  getStore(
    args: {
      merchantId: string,
      storeId: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Store> {
    return super.getStore(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isV1Store(res) || console.error(`TypeGuard for response 'V1Store' caught inconsistency.`, res)));
  }

}
