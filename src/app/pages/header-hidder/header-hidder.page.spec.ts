import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderHidderPage } from './header-hidder.page';

describe('HeaderHidderPage', () => {
  let component: HeaderHidderPage;
  let fixture: ComponentFixture<HeaderHidderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderHidderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderHidderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
