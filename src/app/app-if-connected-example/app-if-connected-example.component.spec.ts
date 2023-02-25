import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIfConnectedExampleComponent } from './app-if-connected-example.component';

describe('AppConnectExampleComponent', () => {
  let component: AppIfConnectedExampleComponent;
  let fixture: ComponentFixture<AppIfConnectedExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppIfConnectedExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppIfConnectedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
