import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'nx-angular-nest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend-client';

  constructor(private readonly store: Store) {
    console.log(this.store);
  }
}
