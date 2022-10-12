import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCdmReleaseComponent } from './add-cdm-release.component';

describe('AddCdmReleaseComponent', () => {
  let component: AddCdmReleaseComponent;
  let fixture: ComponentFixture<AddCdmReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCdmReleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCdmReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
