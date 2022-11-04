import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCdmReleaseComponent } from './edit-cdm-release.component';

describe('EditCdmReleaseComponent', () => {
  let component: EditCdmReleaseComponent;
  let fixture: ComponentFixture<EditCdmReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCdmReleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCdmReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
