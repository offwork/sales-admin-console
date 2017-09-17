import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import * as app from './app.actions';

@Injectable()
export class AppEffects {

    @Effect({ dispatch: false })
    redirectDashboard: Observable<Action> = this.actions$
        .ofType(app.APP_REDIRECT_DASHBOARD)
        .do(() => this.router.navigate(['/', 'dashboard']));

    @Effect({ dispatch: false })
    redirectLogin: Observable<Action> = this.actions$
        .ofType(app.APP_REDIRECT_LOGIN)
        .do(() => this.router.navigate(['/', 'login']));

    @Effect({ dispatch: false })
    redirectRouter: Observable<Action> = this.actions$
        .ofType(app.APP_REDIRECT_ROUTER)
        .do(() => this.router.navigate(['/', 'router']));

    constructor(
        private actions$: Actions,
        private router: Router,
        private store: Store<any>) { }
}
