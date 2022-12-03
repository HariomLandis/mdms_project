import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputdataComponent } from './outputdata.component';

describe('OutputdataComponent', () => {
  let component: OutputdataComponent;
  let fixture: ComponentFixture<OutputdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
