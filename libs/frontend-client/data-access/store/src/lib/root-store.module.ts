import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { reducers } from './+state/root-reducer';
import { rootInitialState } from './+state/root-initial-state';
import { StoreRouterStateSerializer } from './services/store-router-state-serializer-service';

@NgModule({
  imports: [
    RouterModule,
    StoreModule.forRoot(reducers, { initialState: rootInitialState }),
    StoreRouterConnectingModule.forRoot({
      serializer: StoreRouterStateSerializer,
    })
  ],
})
export class RootStoreModule {}
