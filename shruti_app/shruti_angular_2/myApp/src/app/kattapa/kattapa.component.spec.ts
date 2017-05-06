/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KattapaComponent } from './kattapa.component';

describe('KattapaComponent', () => {
  let component: KattapaComponent;
  let fixture: ComponentFixture<KattapaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KattapaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KattapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
