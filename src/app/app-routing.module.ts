import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdmReleaseListComponent } from './cdm-release-list/cdm-release-list.component';
import { CdmReleaseSearchParametersComponent } from './cdm-release-search-parameters/cdm-release-search-parameters.component';
import { CdmReleaseComponent } from './cdm-release/cdm-release.component';

const routes: Routes = [
  {
    path: 'new-cdm-release',
    component: CdmReleaseComponent,
  },
  {
    path: 'cdm-release-list',
    component: CdmReleaseListComponent,
  },
  {
    path: 'cdm-release-search-parameters',
    component: CdmReleaseSearchParametersComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
