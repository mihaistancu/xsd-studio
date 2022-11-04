import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdmReleaseComponent } from './releases/cdm-release/cdm-release.component';
import { CdmReleaseListComponent } from './releases/cdm-release-list/cdm-release-list.component';
import { CdmReleaseSearchParametersComponent } from './releases/cdm-release-search-parameters/cdm-release-search-parameters.component';
import { CdmReleaseSearchComponent } from './releases/cdm-release-search/cdm-release-search.component';
import { AddCdmReleaseComponent } from './releases/add-cdm-release/add-cdm-release.component';
import { ChangeRequestComponent } from './releases/change-request/change-request.component';
import { AddChangeRequestComponent } from './releases/add-change-request/add-change-request.component';
import { EditCdmReleaseComponent } from './releases/edit-cdm-release/edit-cdm-release.component';
import { ChangeRequestListComponent } from './releases/change-request-list/change-request-list.component';
import { TreeNavigationComponent } from './modeling/tree-navigation/tree-navigation.component';
import { ModelSearchComponent } from './modeling/model-search/model-search.component';

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
    EditCdmReleaseComponent,
    ChangeRequestListComponent,
    TreeNavigationComponent,
    ModelSearchComponent
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
