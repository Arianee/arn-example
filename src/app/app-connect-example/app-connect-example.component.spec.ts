import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConnectExampleComponent } from './app-connect-example.component';

describe('AppConnectExampleComponent', () => {
  let component: AppConnectExampleComponent;
  let fixture: ComponentFixture<AppConnectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppConnectExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppConnectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
