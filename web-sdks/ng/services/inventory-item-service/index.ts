/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { InventoryItemServiceAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './inventory-item-service-api-client.service';
import { GuardedInventoryItemServiceAPIClient } from './guarded-inventory-item-service-api-client.service';

export { InventoryItemServiceAPIClient } from './inventory-item-service-api-client.service';
export { InventoryItemServiceAPIClientInterface } from './inventory-item-service-api-client.interface';
export { GuardedInventoryItemServiceAPIClient } from './guarded-inventory-item-service-api-client.service';

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

export interface InventoryItemServiceAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class InventoryItemServiceAPIClientModule {
  /**
   * Use this method in your root module to provide the InventoryItemServiceAPIClientModule
   *
   * If you are not providing
   * @param { InventoryItemServiceAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: InventoryItemServiceAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: InventoryItemServiceAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: InventoryItemServiceAPIClient, useClass: GuardedInventoryItemServiceAPIClient }] : [InventoryItemServiceAPIClient]),
      ]
    };
  }
}
