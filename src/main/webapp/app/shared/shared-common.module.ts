import { NgModule } from '@angular/core';

import { LoyalitySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [LoyalitySharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [LoyalitySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class LoyalitySharedCommonModule {}
