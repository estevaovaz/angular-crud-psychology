import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPsicologosComponent } from './cadastrar-psicologos.component';

describe('CadastrarPsicologosComponent', () => {
  let component: CadastrarPsicologosComponent;
  let fixture: ComponentFixture<CadastrarPsicologosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarPsicologosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarPsicologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
