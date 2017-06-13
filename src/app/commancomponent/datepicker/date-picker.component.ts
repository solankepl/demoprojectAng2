import { ViewChild, ElementRef, AfterViewInit, Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'my-datepicker',
  template: `<input #input type="text">`
})
export class DatePicker implements AfterViewInit {
  @ViewChild('input') input: ElementRef;

  ngAfterViewInit() {
    $(this.input.nativeElement).datepicker();
  }
}