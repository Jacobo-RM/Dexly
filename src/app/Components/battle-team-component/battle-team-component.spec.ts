import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleTeamComponent } from './battle-team-component';

describe('BattleTeamComponent', () => {
  let component: BattleTeamComponent;
  let fixture: ComponentFixture<BattleTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattleTeamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleTeamComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
