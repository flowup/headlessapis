/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { InventoryServiceAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './inventory-service-api-client.service';
import { GuardedInventoryServiceAPIClient } from './guarded-inventory-service-api-client.service';

export { InventoryServiceAPIClient } from './inventory-service-api-client.service';
export { InventoryServiceAPIClientInterface } from './inventory-service-api-client.interface';
export { GuardedInventoryServiceAPIClient } from './guarded-inventory-service-api-client.service';

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

export interface InventoryServiceAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class InventoryServiceAPIClientModule {
  /**
   * Use this method in your root module to provide the InventoryServiceAPIClientModule
   *
   * If you are not providing
   * @param { InventoryServiceAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: InventoryServiceAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: InventoryServiceAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: InventoryServiceAPIClient, useClass: GuardedInventoryServiceAPIClient }] : [InventoryServiceAPIClient]),
      ]
    };
  }
}
