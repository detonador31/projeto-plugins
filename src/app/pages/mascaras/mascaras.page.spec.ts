import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MascarasPage } from './mascaras.page';

describe('MascarasPage', () => {
  let component: MascarasPage;
  let fixture: ComponentFixture<MascarasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascarasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MascarasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
