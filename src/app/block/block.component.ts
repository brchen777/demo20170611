import { Component, OnInit, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  title: string = 'Sky red';

  @ContentChild('btn1') btn1: ElementRef;
  @ContentChild('btn2') btn2: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.btn1) {
      this.btn1.nativeElement.innerHTML = '30';
    }

    if (this.btn2) {
      this.btn2.nativeElement.innerHTML = '60';
    }
  }
}
