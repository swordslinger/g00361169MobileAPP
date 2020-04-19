import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherDataPage } from './weather-data.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherDataPageRoutingModule {}
