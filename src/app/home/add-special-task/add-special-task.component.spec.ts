import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialTaskComponent } from './add-special-task.component';

describe('AddSpecialTaskComponent', () => {
  let component: AddSpecialTaskComponent;
  let fixture: ComponentFixture<AddSpecialTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSpecialTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSpecialTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
