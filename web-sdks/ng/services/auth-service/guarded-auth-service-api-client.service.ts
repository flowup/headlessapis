/* tslint:disable */

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DefaultHttpOptions, HttpOptions } from './';
import { USE_DOMAIN, USE_HTTP_OPTIONS, AuthServiceAPIClient } from './auth-service-api-client.service';

import * as models from '../../models';
import * as guards from '../../guards';

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class GuardedAuthServiceAPIClient extends AuthServiceAPIClient {

  constructor(readonly httpClient: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {
    super(httpClient, domain, options);
  }

  signInWithPassword(
    args: {
      body: models.V1EmailPassword,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Customer> {
    return super.signInWithPassword(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isV1Customer(res) || console.error(`TypeGuard for response 'V1Customer' caught inconsistency.`, res)));
  }

  signUpWithPassword(
    args: {
      body: models.V1EmailPassword,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Customer> {
    return super.signUpWithPassword(args, requestHttpOptions)
      .pipe(tap((res: any) => guards.isV1Customer(res) || console.error(`TypeGuard for response 'V1Customer' caught inconsistency.`, res)));
  }

}
