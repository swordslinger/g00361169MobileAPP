import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController } from '@ionic/angular';

import {WeatherDataService} from '../weather-data.service'

import { WeatherDataPageRoutingModule } from './weather-data-routing.module';

import { WeatherDataPage } from './weather-data.page';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherDataPageRoutingModule
  ],
  declarations: [WeatherDataPage]
})
export class WeatherDataPageModule {







}


