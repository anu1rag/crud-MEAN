import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildRoutingModule } from './child-routing.module';
import { ChildComponent } from './child.component';


@NgModule({
  declarations: [ChildComponent],
  imports: [
    CommonModule,
    ChildRoutingModule
  ]
})
export class ChildModule { }
