import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNavigationComponent } from './tree-navigation.component';

describe('TreeNavigationComponent', () => {
  let component: TreeNavigationComponent;
  let fixture: ComponentFixture<TreeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
