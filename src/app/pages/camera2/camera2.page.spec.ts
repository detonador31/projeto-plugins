import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Camera2Page } from './camera2.page';

describe('Camera2Page', () => {
  let component: Camera2Page;
  let fixture: ComponentFixture<Camera2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Camera2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Camera2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
