import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSolicitacaoComponent } from './editar-solicitacao.component';

describe('EditarSolicitacaoComponent', () => {
  let component: EditarSolicitacaoComponent;
  let fixture: ComponentFixture<EditarSolicitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSolicitacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
