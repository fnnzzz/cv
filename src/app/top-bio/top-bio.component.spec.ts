import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBioComponent } from './top-bio.component';

describe('TopBioComponent', () => {
  let component: TopBioComponent;
  let fixture: ComponentFixture<TopBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
