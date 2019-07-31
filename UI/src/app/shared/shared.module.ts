import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from './prime-ng.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { CommonService } from './services/common.service';
library.add(fas, far);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    FontAwesomeModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    PrimeNgModule,
    FontAwesomeModule
  ],
  providers: [
    ApiService,
    CommonService
  ]
})
export class SharedModule { }
