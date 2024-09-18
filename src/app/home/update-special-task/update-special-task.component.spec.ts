import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecialTaskComponent } from './update-special-task.component';

describe('UpdateSpecialTaskComponent', () => {
  let component: UpdateSpecialTaskComponent;
  let fixture: ComponentFixture<UpdateSpecialTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSpecialTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSpecialTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
