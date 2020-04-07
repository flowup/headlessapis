/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, OrderServiceAPIClient } from './order-service-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedOrderServiceAPIClient extends OrderServiceAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  listOrders(
    args: {
      orderId?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1OrderList> {
    return super.listOrders(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isV1OrderList(res) || console.error(`TypeGuard for response 'V1OrderList' caught inconsistency.`, res)));
  }

  submitOrder(
    args: {
      body: models.V1Order,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Order> {
    return super.submitOrder(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isV1Order(res) || console.error(`TypeGuard for response 'V1Order' caught inconsistency.`, res)));
  }

  addItemToOrder(
    args: {
      orderId: string,
      body: models.V1OrderItem,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Order> {
    return super.addItemToOrder(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isV1Order(res) || console.error(`TypeGuard for response 'V1Order' caught inconsistency.`, res)));
  }

  removeItemFromOrder(
    args: {
      orderId: string,
      body: models.V1OrderItem,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Order> {
    return super.removeItemFromOrder(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isV1Order(res) || console.error(`TypeGuard for response 'V1Order' caught inconsistency.`, res)));
  }

}
