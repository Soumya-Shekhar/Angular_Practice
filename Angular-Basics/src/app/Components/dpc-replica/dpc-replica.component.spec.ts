import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPCReplicaComponent } from './dpc-replica.component';

describe('DPCReplicaComponent', () => {
  let component: DPCReplicaComponent;
  let fixture: ComponentFixture<DPCReplicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DPCReplicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DPCReplicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
