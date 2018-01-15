import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';
const routes: Routes = [
  {path : '', component : DashboardComponent}
];
@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
    RouterModule.forChild(routes)
  ],
  providers: [NbSidebarService],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
