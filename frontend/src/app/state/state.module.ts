import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';


@NgModule({
  declarations: [StateComponent],
  imports: [
    CommonModule,
    StateRoutingModule
  ]
})
export class StateModule { }
