import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeyondABetterBoxPage } from './beyond-a-better-box.page';

describe('BeyondABetterBoxPage', () => {
  let component: BeyondABetterBoxPage;
  let fixture: ComponentFixture<BeyondABetterBoxPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BeyondABetterBoxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeyondABetterBoxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
