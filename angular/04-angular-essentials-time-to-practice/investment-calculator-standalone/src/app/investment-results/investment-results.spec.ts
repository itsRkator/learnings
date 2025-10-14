import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentResults } from './investment-results';

describe('InvestmentResults', () => {
  let component: InvestmentResults;
  let fixture: ComponentFixture<InvestmentResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
