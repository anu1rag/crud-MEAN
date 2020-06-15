import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [StateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StateRoutingModule
  ]
})
export class StateModule { }
