/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthServiceAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './auth-service-api-client.service';
import { GuardedAuthServiceAPIClient } from './guarded-auth-service-api-client.service';

export { AuthServiceAPIClient } from './auth-service-api-client.service';
export { AuthServiceAPIClientInterface } from './auth-service-api-client.interface';
export { GuardedAuthServiceAPIClient } from './guarded-auth-service-api-client.service';

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

export interface AuthServiceAPIClientModuleConfig {
  domain?: string;
  guardResponses?: boolean; // validate responses with type guards
  httpOptions?: DefaultHttpOptions;
}

@NgModule({})
export class AuthServiceAPIClientModule {
  /**
   * Use this method in your root module to provide the AuthServiceAPIClientModule
   *
   * If you are not providing
   * @param { AuthServiceAPIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: AuthServiceAPIClientModuleConfig = {}): ModuleWithProviders {
    return {
      ngModule: AuthServiceAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: AuthServiceAPIClient, useClass: GuardedAuthServiceAPIClient }] : [AuthServiceAPIClient]),
      ]
    };
  }
}
