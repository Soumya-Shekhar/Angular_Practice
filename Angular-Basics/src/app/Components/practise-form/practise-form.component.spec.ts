import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiseFormComponent } from './practise-form.component';

describe('PractiseFormComponent', () => {
  let component: PractiseFormComponent;
  let fixture: ComponentFixture<PractiseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractiseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PractiseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
