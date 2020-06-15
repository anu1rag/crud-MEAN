import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistrictRoutingModule } from './district-routing.module';
import { DistrictComponent } from './district.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DistrictComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DistrictRoutingModule
  ]
})
export class DistrictModule { }
