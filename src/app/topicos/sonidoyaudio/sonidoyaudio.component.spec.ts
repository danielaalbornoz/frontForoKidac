import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonidoyaudioComponent } from './sonidoyaudio.component';

describe('SonidoyaudioComponent', () => {
  let component: SonidoyaudioComponent;
  let fixture: ComponentFixture<SonidoyaudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonidoyaudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonidoyaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
