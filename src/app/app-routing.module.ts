import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdmReleaseComponent } from './cdm-release/cdm-release.component';

const routes: Routes = [
  {
    path: 'new-cdm-release',
    component: CdmReleaseComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
