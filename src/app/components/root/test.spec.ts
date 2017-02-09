/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RootComponent } from './source';

describe('RootComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RootComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(RootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as welcomeMsg 'Bienvenu sur Proto'`, async(() => {
    const fixture = TestBed.createComponent(RootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.welcomeMsg).toEqual('Bienvenu sur Proto');
  }));

  it(`should have as welcomeMsgPlus '+'`, async(() => {
    const fixture = TestBed.createComponent(RootComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.welcomeMsgPlus).toEqual('+');
  }));
});
