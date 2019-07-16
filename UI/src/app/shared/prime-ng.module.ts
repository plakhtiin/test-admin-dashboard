import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

const modules = [
  CommonModule,
  DropdownModule,
  InputTextModule,
  ButtonModule,
];
@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class PrimeNgModule { }
