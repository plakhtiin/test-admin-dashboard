import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { TreeModule } from 'primeng/tree';

const modules = [
  CommonModule,
  DropdownModule,
  InputTextModule,
  ButtonModule,
  TreeModule
];
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class PrimeNgModule { }
