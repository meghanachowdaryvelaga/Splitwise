import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appFeatureInfo]'
})
export class FeatureInfo implements OnInit {
  @Input() infoText: string = '';
  constructor( private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.innerText = this.infoText +" coming soon";
  }
}

