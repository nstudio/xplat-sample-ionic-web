import { Component } from '@angular/core';

import { BaseComponent } from '@testing/core';

@Component({
  selector: 'abc-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseComponent {}
