import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeatherDataPage } from './weather-data.page';

describe('WeatherDataPage', () => {
  let component: WeatherDataPage;
  let fixture: ComponentFixture<WeatherDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
