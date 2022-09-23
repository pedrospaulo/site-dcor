import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExamesComponent } from './card-exames.component';

describe('CardExamesComponent', () => {
  let component: CardExamesComponent;
  let fixture: ComponentFixture<CardExamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
