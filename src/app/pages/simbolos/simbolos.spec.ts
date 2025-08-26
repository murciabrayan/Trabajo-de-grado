import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simbolos } from './simbolos';

describe('Simbolos', () => {
  let component: Simbolos;
  let fixture: ComponentFixture<Simbolos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simbolos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Simbolos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
