/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    expect(true).toBe(true)
  }));
  
  it('Test component',()=>{
	  const x = TestBed.createComponent(AppComponent);
	  const app = x.debugElement.componentInstance;
	  app.setData('Mohan');
	  expect(app.nm).toBe('Mohan')
  });
  
  it('Test add',()=>{
	 const x = TestBed.createComponent(AppComponent);
	  const app = x.debugElement.componentInstance;
	 expect(app.add(1,3)).toEqual(4) 
  });
});
