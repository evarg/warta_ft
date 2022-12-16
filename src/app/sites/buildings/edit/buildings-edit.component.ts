import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buildings-edit',
  templateUrl: './buildings-edit.component.html',
  styleUrls: ['./buildings-edit.component.scss']
})
export class BuildingsEditComponent implements OnInit {

  buildingID: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.buildingID = params['id'];
    });
  }

}
