import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingAttireComponent } from './wedding-attire.component';

describe('WeddingAttireComponent', () => {
  let component: WeddingAttireComponent;
  let fixture: ComponentFixture<WeddingAttireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeddingAttireComponent]
    });
    fixture = TestBed.createComponent(WeddingAttireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
