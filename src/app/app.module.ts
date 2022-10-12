import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdmReleaseComponent } from './cdm-release/cdm-release.component';
import { CdmReleaseListComponent } from './cdm-release-list/cdm-release-list.component';
import { CdmReleaseSearchParametersComponent } from './cdm-release-search-parameters/cdm-release-search-parameters.component';
import { CdmReleaseSearchComponent } from './cdm-release-search/cdm-release-search.component';

@NgModule({
  declarations: [
    AppComponent,
    CdmReleaseComponent,
    CdmReleaseListComponent,
    CdmReleaseSearchParametersComponent,
    CdmReleaseSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
