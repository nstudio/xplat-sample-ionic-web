import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@testing/web';

@Component({
  selector: 'abc-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
