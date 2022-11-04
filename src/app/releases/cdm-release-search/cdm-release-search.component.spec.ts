import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdmReleaseSearchComponent } from './cdm-release-search.component';

describe('CdmReleaseSearchComponent', () => {
  let component: CdmReleaseSearchComponent;
  let fixture: ComponentFixture<CdmReleaseSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdmReleaseSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdmReleaseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
