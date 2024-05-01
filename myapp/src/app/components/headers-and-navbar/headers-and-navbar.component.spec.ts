import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersAndNavbarComponent } from './headers-and-navbar.component';

describe('HeadersAndNavbarComponent', () => {
  let component: HeadersAndNavbarComponent;
  let fixture: ComponentFixture<HeadersAndNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadersAndNavbarComponent]
    });
    fixture = TestBed.createComponent(HeadersAndNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
