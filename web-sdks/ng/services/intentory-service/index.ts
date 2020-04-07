/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { IntentoryServiceAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './intentory-service-api-client.service';
import { GuardedIntentoryServiceAPIClient } from './guarded-intentory-service-api-client.service';

export { IntentoryServiceAPIClient } from './intentory-service-api-client.service';
export { IntentoryServiceAPIClientInterface } from './intentory-service-api-client.interface';
export { GuardedIntentoryServiceAPIClient } from './guarded-intentory-service-api-client.service';

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

export interface IntentoryServiceAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class IntentoryServiceAPIClientModule {
  /**
   * Use this method in your root module to provide the IntentoryServiceAPIClientModule
   *
   * If you are not providing
   * @param { IntentoryServiceAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: IntentoryServiceAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: IntentoryServiceAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: IntentoryServiceAPIClient, useClass: GuardedIntentoryServiceAPIClient }] : [IntentoryServiceAPIClient]),
      ]
    };
  }
}
