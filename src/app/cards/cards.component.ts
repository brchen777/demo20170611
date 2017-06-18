import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BlockComponent } from '../block/block.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @ViewChild(BlockComponent) block: BlockComponent;

  type: string;
  p1;
  p2;
  p3;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    // 這邊網址的變動不可用 snapshot
    // this.type = this.route.snapshot.params['type'];

    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.p1 = params['p1'];
    });

    this.route.queryParams.subscribe(params => {
      this.p2 = params['p2'];
      this.p3 = params['p3'];
    });
  }

  ngAfterViewInit() {
    this.block.title = 'The Will Will Web';
  }

  goCards(num) {
    this.router.navigate(['/', 'cards', parseInt(this.type) + num]);
  }

  plus1(btn: HTMLButtonElement) {
    let num = +btn.innerText;
    num++;
    btn.innerText = num.toString();
  }
}
