/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { StoreServiceAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './store-service-api-client.service';
import { GuardedStoreServiceAPIClient } from './guarded-store-service-api-client.service';

export { StoreServiceAPIClient } from './store-service-api-client.service';
export { StoreServiceAPIClientInterface } from './store-service-api-client.interface';
export { GuardedStoreServiceAPIClient } from './guarded-store-service-api-client.service';

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

export interface StoreServiceAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class StoreServiceAPIClientModule {
  /**
   * Use this method in your root module to provide the StoreServiceAPIClientModule
   *
   * If you are not providing
   * @param { StoreServiceAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: StoreServiceAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: StoreServiceAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: StoreServiceAPIClient, useClass: GuardedStoreServiceAPIClient }] : [StoreServiceAPIClient]),
      ]
    };
  }
}
