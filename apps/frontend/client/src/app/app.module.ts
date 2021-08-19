import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RootStoreModule } from '@nx-angular-nest/frontend-shared-data-access-root-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'frontend-client' }),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    RootStoreModule,
  ],
})
export class AppModule {}
