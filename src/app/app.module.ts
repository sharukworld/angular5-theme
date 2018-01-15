import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbLayoutModule, NbSidebarModule, NbSidebarService, NbThemeModule } from '@nebular/theme';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    NbThemeModule.forRoot({ name: 'default' }),
    DashboardModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
