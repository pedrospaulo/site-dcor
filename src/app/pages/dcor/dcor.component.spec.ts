import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcorComponent } from './dcor.component';

describe('DcorComponent', () => {
  let component: DcorComponent;
  let fixture: ComponentFixture<DcorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DcorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
