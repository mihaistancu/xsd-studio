import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCdmReleaseComponent } from './add-cdm-release/add-cdm-release.component';
import { CdmReleaseSearchComponent } from './cdm-release-search/cdm-release-search.component';

const routes: Routes = [
  {
    path: 'new-cdm-release',
    component: AddCdmReleaseComponent,
  },
  {
    path: 'cdm-release-search',
    component: CdmReleaseSearchComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
