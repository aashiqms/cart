import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [],
  imports: [
  CommonModule,
    FlexLayoutModule,
    FlexModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    FlexLayoutModule,
    FlexModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class SharedModule { }
