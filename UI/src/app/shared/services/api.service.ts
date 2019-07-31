import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ReplaySubject, Subject } from 'rxjs';
import { first, map, retry, switchMap, timeout } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

interface IRequestParams {
  headers: HttpHeaders;
  url: string;
  method: string;
  body?: any;
  retry?: number;
  timeout?: number;
  params: HttpParams;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private init: Subject<boolean> = new ReplaySubject(1);
  private config = {
    apiUri: 'http://localhost:3000',
    apiTimeout: 5000,
    apiRetry: 1
  };

  constructor(
    private httpClient: HttpClient
  ) {
    this.init.next(true);
  }

  private queryHeaders() {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return headers;
  }

  private makeRequest(params: IRequestParams) {
    return this.init.pipe(
      first(),
      map(() => {
        // if (!environment.production) {
        //   params.headers = params.headers.set('X-Token', 'empty');
        // }
        const actionURL = `${this.config.apiUri}${params.url}`;
        const options = {
          body: params.body,
          headers: params.headers,
          withCredentials: environment.production,
          params: params.params
        };
        const timeoutValue = params.timeout == null ? this.config.apiTimeout : params.timeout;
        const retryValue = params.retry == null ? this.config.apiRetry : params.retry;
        return {
          actionURL,
          method: params.method,
          options,
          retryValue,
          timeoutValue,
        };
      }),
      switchMap((request) =>
        this.httpClient.request<Object>(request.method, request.actionURL, request.options).pipe(
          timeout(request.timeoutValue),
          retry(request.retryValue)
        )
      )
    );
  }

  public rest(url: string, method: string = 'GET', body?: any, params?: any) {
    const headers = this.queryHeaders();
    const paramsObj = new HttpParams({fromObject: params});
    const req = {
      body, headers, method, url,
      params: paramsObj
    };
    return this.makeRequest(req);
  }
}
