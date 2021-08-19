import { Params } from '@angular/router';

export interface IRouterUrlState {
  /**
   * URL
   */
  url: string;

  /**
   * Route params
   */
  params: Params;

  /**
   * Route URL query params
   */
  queryParams: Params;
}
