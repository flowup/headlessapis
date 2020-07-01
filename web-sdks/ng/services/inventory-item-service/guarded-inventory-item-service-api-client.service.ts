/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, InventoryItemServiceAPIClient } from './inventory-item-service-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedInventoryItemServiceAPIClient extends InventoryItemServiceAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  listStoreItems(
    args: {
      merchantId: string,
      storeId: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1StoreItemList> {
    return super.listStoreItems(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isV1StoreItemList(res) || console.error(`TypeGuard for response 'V1StoreItemList' caught inconsistency.`, res)));
  }

  getItem(
    args: {
      merchantId: string,
      storeId: string,
      itemId: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1StoreItem> {
    return super.getItem(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isV1StoreItem(res) || console.error(`TypeGuard for response 'V1StoreItem' caught inconsistency.`, res)));
  }

}
