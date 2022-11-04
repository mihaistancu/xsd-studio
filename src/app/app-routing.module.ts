import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelSearchComponent } from './modeling/model-search/model-search.component';
import { AddCdmReleaseComponent } from './releases/add-cdm-release/add-cdm-release.component';
import { AddChangeRequestComponent } from './releases/add-change-request/add-change-request.component';
import { CdmReleaseSearchComponent } from './releases/cdm-release-search/cdm-release-search.component';
import { EditCdmReleaseComponent } from './releases/edit-cdm-release/edit-cdm-release.component';

const routes: Routes = [
  {
    path: 'new-cdm-release',
    component: AddCdmReleaseComponent,
  },
  {
    path: 'edit-cdm-release/:cdmId',
    component: EditCdmReleaseComponent,
  },
  {
    path: 'cdm-release-search',
    component: CdmReleaseSearchComponent,
  },
  {
    path: 'new-change-request/:cdmId',
    component: AddChangeRequestComponent,
  },
  {
    path: 'model-search',
    component: ModelSearchComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
