import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreviousPage } from './previous.page';

describe('PreviousPage', () => {
  let component: PreviousPage;
  let fixture: ComponentFixture<PreviousPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
