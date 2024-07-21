import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfoComponent } from './info.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';

describe('InfoComponent', () => {
  let router: Router;
  let location: Location;
  let component: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'home', component: HomeComponent } // DummyHomeComponent is a placeholder
      ])],
      declarations: [InfoComponent, HomeComponent]
    });

  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(InfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home on clicking the button in info component', waitForAsync(() => {
    fixture.detectChanges();
    let btns = el.queryAll(By.css('button'))
    btns[0].nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home')
    })
  }))
});
