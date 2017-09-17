import { VERSION } from '@angular/core';

import { sortBy } from 'lodash';
import { Action } from '@ngrx/store';

import * as layout from './layout.actions';

export interface State {
    headerNav   : any[];
    footerLeft  : string;
    footerRight : string;
    sidebarNav  : any[];
}

const initialState: State = {
    headerNav   : [],
    footerLeft  : 'Kalem Yazilim',
    footerRight : `Angular ${VERSION.full}`,
    sidebarNav  : [],
}

export function reducer(state = initialState, action: layout.Actions): State {
    switch (action.type) {

        case layout.LAYOUT_HEADER_NAV:
            return Object.assign({}, state, { headerNav: sortBy([...state.headerNav, action.payload], ['weight']) });

        case layout.LAYOUT_FOOTER_LEFT:
            return Object.assign({}, state, { footerLeft: action.payload });

        case layout.LAYOUT_FOOTER_RIGHT:
            return Object.assign({}, state, { footerRight: action.payload });

        case layout.LAYOUT_SIDEBAR_NAV:
            return Object.assign({}, state, { sidebarNav: sortBy([...state.sidebarNav, action.payload], ['weight']) });

        default:
            return state;
  }
}