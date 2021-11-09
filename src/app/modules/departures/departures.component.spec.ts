import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparturesComponent } from './departures.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DepartureService } from './services/departure.service';

describe('DeparturesComponent', () => {
  let component: DeparturesComponent;
  let fixture: ComponentFixture<DeparturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeparturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should use the stations List from the service", () => {
    const departureService = fixture.debugElement.injector.get(DepartureService);
    fixture.detectChanges();
    expect(departureService.getStations()).toEqual(component.stations);
  });
  it("should use the departures List from the service", () => {
    const departureService = fixture.debugElement.injector.get(DepartureService);
    fixture.detectChanges();
    expect(departureService.getDepartures('GVC')).toEqual(component.departures);
  });
});
