/* tslint:disable */

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DefaultHttpOptions, HttpOptions, InventoryServiceAPIClientInterface } from './';

import * as models from '../../models';

export const USE_DOMAIN = new InjectionToken<string>('InventoryServiceAPIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('InventoryServiceAPIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
  responseType?: 'arraybuffer' | 'blob' | 'text' | 'json';
};

/**
 * Created with https://github.com/flowup/api-client-generator
 */
@Injectable()
export class InventoryServiceAPIClient implements InventoryServiceAPIClientInterface {

  readonly options: APIHttpOptions;

  readonly domain: string = `//${window.location.hostname}${window.location.port ? ':'+window.location.port : ''}`;

  constructor(private readonly http: HttpClient,
              @Optional() @Inject(USE_DOMAIN) domain?: string,
              @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions) {

    if (domain != null) {
      this.domain = domain;
    }

    this.options = {
      headers: new HttpHeaders(options && options.headers ? options.headers : {}),
      params: new HttpParams(options && options.params ? options.params : {}),
      ...(options && options.reportProgress ? { reportProgress: options.reportProgress } : {}),
      ...(options && options.withCredentials ? { withCredentials: options.withCredentials } : {})
    };
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  listProducts(
    args: {
      productId?: string,
      name?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1ProductList> {
    const path = `/products`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('productId' in args) {
      options.params = options.params.set('productId', String(args.productId));
    }
    if ('name' in args) {
      options.params = options.params.set('name', String(args.name));
    }
    return this.sendRequest<models.V1ProductList>('GET', path, options);
  }

  /**
   * Response generated for [ 200 ] HTTP response code.
   */
  getProduct(
    args: {
      productId: string,
      name?: string,
    },
    requestHttpOptions?: HttpOptions
  ): Observable<models.V1Product> {
    const path = `/products/${args.productId}`;
    const options: APIHttpOptions = {
      ...this.options,
      ...requestHttpOptions,
    };

    if ('name' in args) {
      options.params = options.params.set('name', String(args.name));
    }
    return this.sendRequest<models.V1Product>('GET', path, options);
  }

  private sendRequest<T>(method: string, path: string, options: HttpOptions, body?: any): Observable<T> {
    switch (method) {
      case 'DELETE':
        return this.http.delete<T>(`${this.domain}${path}`, options);
      case 'GET':
        return this.http.get<T>(`${this.domain}${path}`, options);
      case 'HEAD':
        return this.http.head<T>(`${this.domain}${path}`, options);
      case 'OPTIONS':
        return this.http.options<T>(`${this.domain}${path}`, options);
      case 'PATCH':
        return this.http.patch<T>(`${this.domain}${path}`, body, options);
      case 'POST':
        return this.http.post<T>(`${this.domain}${path}`, body, options);
      case 'PUT':
        return this.http.put<T>(`${this.domain}${path}`, body, options);
      default:
        console.error(`Unsupported request: ${method}`);
        return throwError(`Unsupported request: ${method}`);
    }
  }
}
