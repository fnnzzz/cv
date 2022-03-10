import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopProjectsComponent } from './top-projects.component';

describe('TopProjectsComponent', () => {
  let component: TopProjectsComponent;
  let fixture: ComponentFixture<TopProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
