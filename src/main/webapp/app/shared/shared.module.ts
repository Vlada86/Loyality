import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoyalitySharedLibsModule, LoyalitySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [LoyalitySharedLibsModule, LoyalitySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [LoyalitySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoyalitySharedModule {
  static forRoot() {
    return {
      ngModule: LoyalitySharedModule
    };
  }
}
