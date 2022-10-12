import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdmReleaseComponent } from './cdm-release/cdm-release.component';
import { CdmReleaseListComponent } from './cdm-release-list/cdm-release-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CdmReleaseComponent,
    CdmReleaseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
