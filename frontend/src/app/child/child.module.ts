import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { ChildComponent } from './child.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChildRoutingModule
  ]
})
export class ChildModule { }
