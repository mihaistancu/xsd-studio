import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdmReleaseListComponent } from './cdm-release-list/cdm-release-list.component';
import { CdmReleaseComponent } from './cdm-release/cdm-release.component';

const routes: Routes = [
  {
    path: 'new-cdm-release',
    component: CdmReleaseComponent,
  },
  {
    path: 'cdm-release-list',
    component: CdmReleaseListComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
