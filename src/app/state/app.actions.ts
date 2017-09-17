import { Action } from '@ngrx/store';

export const APP_DOMAIN_ADD         = '[App] Domain Add';
export const APP_SETTING_ADD        = '[App] Setting Add';
export const APP_REDIRECT_DASHBOARD = '[App] Redirect Dashboard';
export const APP_REDIRECT_LOGIN     = '[App] Redirect Login';
export const APP_REDIRECT_ROUTER    = '[App] Redirect Router';

export class AddDomain implements Action {
    readonly type = APP_DOMAIN_ADD;
    constructor(public payload: any) { }
}
  
export class AddSetting implements Action {
    readonly type = APP_SETTING_ADD;
    constructor(public payload: any) { }
}

export class RedirectDashboard implements Action {
    readonly type = APP_REDIRECT_DASHBOARD;
    constructor(public payload: any) { }
}

export class RedirectLogin implements Action {
    readonly type = APP_REDIRECT_LOGIN;
    constructor(public payload: any) { }
}

export class RedirectRouter implements Action {
    readonly type = APP_REDIRECT_ROUTER;
    constructor(public payload: any) { }
}

export type Actions
    = AddDomain
    | AddSetting
    | RedirectDashboard
    | RedirectLogin
    | RedirectRouter;
