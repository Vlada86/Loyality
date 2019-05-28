import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'rfb-location',
        loadChildren: './rfb-location/rfb-location.module#LoyalityRfbLocationModule'
      },
      {
        path: 'rfb-event',
        loadChildren: './rfb-event/rfb-event.module#LoyalityRfbEventModule'
      },
      {
        path: 'rfb-event-attendance',
        loadChildren: './rfb-event-attendance/rfb-event-attendance.module#LoyalityRfbEventAttendanceModule'
      },
      {
        path: 'rfb-user',
        loadChildren: './rfb-user/rfb-user.module#LoyalityRfbUserModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoyalityEntityModule {}
