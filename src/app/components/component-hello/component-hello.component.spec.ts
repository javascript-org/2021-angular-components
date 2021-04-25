import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHelloComponent } from './component-hello.component';

describe('ComponentHelloComponent', () => {
  let component: ComponentHelloComponent;
  let fixture: ComponentFixture<ComponentHelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentHelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
