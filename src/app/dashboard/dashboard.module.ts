import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [NbSidebarService],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
