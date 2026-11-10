import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonIndComponent } from './pokemon-ind-component';

describe('PokemonIndComponent', () => {
  let component: PokemonIndComponent;
  let fixture: ComponentFixture<PokemonIndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonIndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonIndComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
