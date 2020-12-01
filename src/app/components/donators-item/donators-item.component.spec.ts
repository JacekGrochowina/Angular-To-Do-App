import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorsItemComponent } from './donators-item.component';

describe('DonatorsItemComponent', () => {
  let component: DonatorsItemComponent;
  let fixture: ComponentFixture<DonatorsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatorsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
