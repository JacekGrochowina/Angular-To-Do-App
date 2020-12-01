import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorsListComponent } from './donators-list.component';

describe('DonatorsListComponent', () => {
  let component: DonatorsListComponent;
  let fixture: ComponentFixture<DonatorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonatorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
