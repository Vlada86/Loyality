import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoyalitySharedModule } from 'app/shared';
import {
  RfbEventAttendanceComponent,
  RfbEventAttendanceDetailComponent,
  RfbEventAttendanceUpdateComponent,
  RfbEventAttendanceDeletePopupComponent,
  RfbEventAttendanceDeleteDialogComponent,
  rfbEventAttendanceRoute,
  rfbEventAttendancePopupRoute
} from './';

const ENTITY_STATES = [...rfbEventAttendanceRoute, ...rfbEventAttendancePopupRoute];

@NgModule({
  imports: [LoyalitySharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    RfbEventAttendanceComponent,
    RfbEventAttendanceDetailComponent,
    RfbEventAttendanceUpdateComponent,
    RfbEventAttendanceDeleteDialogComponent,
    RfbEventAttendanceDeletePopupComponent
  ],
  entryComponents: [
    RfbEventAttendanceComponent,
    RfbEventAttendanceUpdateComponent,
    RfbEventAttendanceDeleteDialogComponent,
    RfbEventAttendanceDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoyalityRfbEventAttendanceModule {}
