import { NgModule } from  '@angular/core';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatSliderModule} from  '@angular/material/slider';
import {MatDividerModule} from  '@angular/material/divider';

@NgModule({
imports: [MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatDatepickerModule],
exports: [MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,MatDatepickerModule],

})

export  class  MyMaterialModule { }