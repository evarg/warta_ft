import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/model/building';
import { HttpClient } from '@angular/common/http';
import { BuildingsService } from 'src/app/services/buildings.service';

@Component({
  selector: 'app-buildings-view-list',
  templateUrl: './buildings-view-list.component.html',
  styleUrls: ['./buildings-view-list.component.scss']
})
export class BuildingsViewListComponent implements OnInit {

  displayedColumns: string[] = ['buildingID', 'buildingName', 'buildingDesc'];
  dataSource: Building[] = [];
  animal: string = "";
  name: string = "";
  progress: number = 0;

  constructor(private http: HttpClient, private buildingsService: BuildingsService) { }

  ngOnInit(): void {
    this.dataSource = this.buildingsService.dataSource;
    this.getAll()
  }

  getAll(): void {
    this.progress = 100;
    this.buildingsService.list().subscribe(data => {
      this.dataSource = data;
      this.buildingsService.dataSource = data;
      this.progress = 0;
    })
  }
}
