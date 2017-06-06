/* tslint:disable:no-unused-variable */
/*import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
import {TestBed,async} from '@angular/core/testing';
import {UserComponent} from './user.component'
describe('I want to test whole items',()=>{
	
	beforeEach(async(()=>{
		TestBed.configureTestingModule({
			declarations : [UserComponent]			
		}).compileComponents();		
	}));
	
	it('Test1',()=>{
		expect(true).toBe(true)
		
	});
	
	it('Test 2 ',()=>{
		var xyz = TestBed.createComponent(UserComponent);
		var app = xyz.debugElement.componentInstance;
		app.setMessage('mango')
		expect(app.msg).toBe('mango');
	});
	
	it('Test 3',()=>{
		var xyz = TestBed.createComponent(UserComponent);
		var app = xyz.nativeElement;
		let x = app.querySelectorAll('tr')
		expect(x.length).toBe(1)
	});
	
})


