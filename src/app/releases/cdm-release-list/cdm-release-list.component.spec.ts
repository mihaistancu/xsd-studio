import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdmReleaseListComponent } from './cdm-release-list.component';

describe('CdmReleaseListComponent', () => {
  let component: CdmReleaseListComponent;
  let fixture: ComponentFixture<CdmReleaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdmReleaseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdmReleaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
