import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeChildComponent } from './before-child.component';

describe('BeforeChildComponent', () => {
  let component: BeforeChildComponent;
  let fixture: ComponentFixture<BeforeChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforeChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeforeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
