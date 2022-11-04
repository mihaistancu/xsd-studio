import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdmReleaseComponent } from './cdm-release.component';

describe('CdmReleaseComponent', () => {
  let component: CdmReleaseComponent;
  let fixture: ComponentFixture<CdmReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdmReleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdmReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
