import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  type: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    // 這邊網址的變動不可用 snapshot
    // this.type = this.route.snapshot.params['type'];

    this.route.params.subscribe(params => {
      this.type = params['type'];
    });

  }

  goCards(num) {
    this.router.navigate(['/', 'cards', parseInt(this.type) + num]);
  }

}
