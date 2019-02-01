import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { UIModule as UIWebModule } from '@testing/web';
import { UI_COMPONENTS } from './components';

const MODULES = [UIWebModule, IonicModule];

@NgModule({
  imports: [...MODULES],
  declarations: [...UI_COMPONENTS],
  exports: [...MODULES, ...UI_COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UIModule {}
