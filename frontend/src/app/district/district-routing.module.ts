import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistrictComponent } from './district.component';

const routes: Routes = [{ path: '', component: DistrictComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictRoutingModule { }
