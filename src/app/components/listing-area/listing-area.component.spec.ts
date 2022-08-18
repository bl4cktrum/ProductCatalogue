import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingAreaComponent } from './listing-area.component';

describe('ListingAreaComponent', () => {
  let component: ListingAreaComponent;
  let fixture: ComponentFixture<ListingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
