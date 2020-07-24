/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListappComponent } from './listapp.component';

describe('ListappComponent', () => {
  let component: ListappComponent;
  let fixture: ComponentFixture<ListappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
