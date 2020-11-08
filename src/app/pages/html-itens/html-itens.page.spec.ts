import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HtmlItensPage } from './html-itens.page';

describe('HtmlItensPage', () => {
  let component: HtmlItensPage;
  let fixture: ComponentFixture<HtmlItensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlItensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HtmlItensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
