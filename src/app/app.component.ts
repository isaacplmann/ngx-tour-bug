import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TourService } from 'ngx-tour-md-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private tourService: TourService, private router: Router) {
    this.tourService.initialize([{
      anchorId: 'some.anchor.id',
      content: 'Some content',
      title: 'First',
    }, {
      anchorId: 'another.anchor.id',
      content: 'Other content',
      title: 'Second',
    }]);
  }

  ngOnInit() {
    console.log('oninit');
    this.tourService.start();
  }
}
