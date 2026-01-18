import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFeatureInfo]'
})
export class FeatureInfo implements OnInit {
  @Input() infoText: string = '';
  constructor( private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.innerText = this.infoText +" coming soon";
  }
}
