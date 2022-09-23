import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamesProcedimentosComponent } from './exames-procedimentos.component';

describe('ExamesProcedimentosComponent', () => {
  let component: ExamesProcedimentosComponent;
  let fixture: ComponentFixture<ExamesProcedimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamesProcedimentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamesProcedimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
