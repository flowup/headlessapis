/* tslint:disable */

import * as models from '../models';

/* pre-prepared guards for build in complex types */

function _isBlob(arg: any): arg is Blob {
  return arg != null && typeof arg.size === 'number' && typeof arg.type === 'string' && typeof arg.slice === 'function';
}

export function isFile(arg: any): arg is File {
return arg != null && typeof arg.lastModified === 'number' && typeof arg.name === 'string' && _isBlob(arg);
}

/* generated type guards */

export function isV1Order(arg: any): arg is models.V1Order {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // items?: V1OrderItem[]
    ( typeof arg.items === 'undefined' || (Array.isArray(arg.items) && arg.items.every((item: unknown) => isV1OrderItem(item))) ) &&
    // orderId?: string
    ( typeof arg.orderId === 'undefined' || typeof arg.orderId === 'string' ) &&
    // storeId?: string
    ( typeof arg.storeId === 'undefined' || typeof arg.storeId === 'string' ) &&

  true
  );
  }

export function isV1OrderItem(arg: any): arg is models.V1OrderItem {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // count?: number
    ( typeof arg.count === 'undefined' || typeof arg.count === 'number' ) &&
    // orderId?: string
    ( typeof arg.orderId === 'undefined' || typeof arg.orderId === 'string' ) &&
    // product?: V1Product
    ( typeof arg.product === 'undefined' || isV1Product(arg.product) ) &&
    // storeId?: string
    ( typeof arg.storeId === 'undefined' || typeof arg.storeId === 'string' ) &&

  true
  );
  }

export function isV1OrderList(arg: any): arg is models.V1OrderList {
  return (
  arg != null &&
  typeof arg === 'object' &&

  true
  );
  }

export function isV1Product(arg: any): arg is models.V1Product {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // attributes?: { [key: string]: string }
    ( typeof arg.attributes === 'undefined' || typeof arg.attributes === 'string' ) &&
    // labels?: { [key: string]: string }
    ( typeof arg.labels === 'undefined' || typeof arg.labels === 'string' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // productId?: string
    ( typeof arg.productId === 'undefined' || typeof arg.productId === 'string' ) &&
    // storeId?: string
    ( typeof arg.storeId === 'undefined' || typeof arg.storeId === 'string' ) &&

  true
  );
  }

export function isV1ProductList(arg: any): arg is models.V1ProductList {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // data?: V1Product[]
    ( typeof arg.data === 'undefined' || (Array.isArray(arg.data) && arg.data.every((item: unknown) => isV1Product(item))) ) &&

  true
  );
  }


