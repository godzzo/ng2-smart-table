import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { SharedModule } from '../../shared/shared.module';

import { TestOneComponent } from './test-one.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    Ng2SmartTableModule,

    SharedModule,
  ],
  entryComponents: [
  ],
  declarations: [
    TestOneComponent,
  ],
})
export class TestOneModule { }
