import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScrollPage } from './scroll.page';

describe('ScrollPage', () => {
  let component: ScrollPage;
  let fixture: ComponentFixture<ScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
