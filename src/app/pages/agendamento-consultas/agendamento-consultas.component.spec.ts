import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoConsultasComponent } from './agendamento-consultas.component';

describe('AgendamentoConsultasComponent', () => {
  let component: AgendamentoConsultasComponent;
  let fixture: ComponentFixture<AgendamentoConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoConsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
