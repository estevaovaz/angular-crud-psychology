import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPsicologosComponent } from './listar-psicologos.component';

describe('ListarPsicologosComponent', () => {
  let component: ListarPsicologosComponent;
  let fixture: ComponentFixture<ListarPsicologosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPsicologosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPsicologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
