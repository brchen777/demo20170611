import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

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

  goCards(num) {
    this.router.navigate(['/', 'cards', parseInt(this.type) + num]);
  }

}
