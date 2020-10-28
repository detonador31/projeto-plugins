import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Camera1Page } from './camera1.page';

describe('Camera1Page', () => {
  let component: Camera1Page;
  let fixture: ComponentFixture<Camera1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Camera1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Camera1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
