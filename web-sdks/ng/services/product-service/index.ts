/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductServiceAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './product-service-api-client.service';
import { GuardedProductServiceAPIClient } from './guarded-product-service-api-client.service';

export { ProductServiceAPIClient } from './product-service-api-client.service';
export { ProductServiceAPIClientInterface } from './product-service-api-client.interface';
export { GuardedProductServiceAPIClient } from './guarded-product-service-api-client.service';

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

export interface ProductServiceAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class ProductServiceAPIClientModule {
  /**
   * Use this method in your root module to provide the ProductServiceAPIClientModule
   *
   * If you are not providing
   * @param { ProductServiceAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: ProductServiceAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: ProductServiceAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: ProductServiceAPIClient, useClass: GuardedProductServiceAPIClient }] : [ProductServiceAPIClient]),
      ]
    };
  }
}
