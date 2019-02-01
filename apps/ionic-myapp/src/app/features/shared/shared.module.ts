import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@testing/ionic';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
