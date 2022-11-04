import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdmReleaseSearchParametersComponent } from './cdm-release-search-parameters.component';

describe('CdmReleaseSearchParametersComponent', () => {
  let component: CdmReleaseSearchParametersComponent;
  let fixture: ComponentFixture<CdmReleaseSearchParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdmReleaseSearchParametersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdmReleaseSearchParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
