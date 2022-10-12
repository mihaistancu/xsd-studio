import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdmReleaseComponent } from './cdm-release/cdm-release.component';
import { CdmReleaseListComponent } from './cdm-release-list/cdm-release-list.component';
import { CdmReleaseSearchParametersComponent } from './cdm-release-search-parameters/cdm-release-search-parameters.component';
import { CdmReleaseSearchComponent } from './cdm-release-search/cdm-release-search.component';
import { AddCdmReleaseComponent } from './add-cdm-release/add-cdm-release.component';
import { ChangeRequestComponent } from './change-request/change-request.component';
import { AddChangeRequestComponent } from './add-change-request/add-change-request.component';
import { EditCdmReleaseComponent } from './edit-cdm-release/edit-cdm-release.component';

@NgModule({
  declarations: [
    AppComponent,
    CdmReleaseComponent,
    CdmReleaseListComponent,
    CdmReleaseSearchParametersComponent,
    CdmReleaseSearchComponent,
    AddCdmReleaseComponent,
    ChangeRequestComponent,
    AddChangeRequestComponent,
    EditCdmReleaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
