/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { OrderServiceAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './order-service-api-client.service';
import { GuardedOrderServiceAPIClient } from './guarded-order-service-api-client.service';

export { OrderServiceAPIClient } from './order-service-api-client.service';
export { OrderServiceAPIClientInterface } from './order-service-api-client.interface';
export { GuardedOrderServiceAPIClient } from './guarded-order-service-api-client.service';

/**
 * provided options, headers and params will be used as default for each request
 */
export interface DefaultHttpOptions {
  headers?: {[key: string]: string};
  params?: {[key: string]: string};
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export interface HttpOptions {
  headers?: HttpHeaders;
  params?: HttpParams;
  reportProgress?: boolean;
  withCredentials?: boolean;
}

export interface OrderServiceAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class OrderServiceAPIClientModule {
  /**
   * Use this method in your root module to provide the OrderServiceAPIClientModule
   *
   * If you are not providing
   * @param { OrderServiceAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: OrderServiceAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: OrderServiceAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: OrderServiceAPIClient, useClass: GuardedOrderServiceAPIClient }] : [OrderServiceAPIClient]),
      ]
    };
  }
}
