import { Component, OnInit, Inject } from '@angular/core';
import { Building } from 'src/app/model/building';
import { HttpClient } from '@angular/common/http';

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {
  displayedColumns: string[] = ['buildingID', 'buildingName', 'buildingDesc'];
  dataSource: Building[] = [];
  animal: string = "";
  name: string = "";

  constructor(private buildingsService: HttpClient) {

  }

  ngOnInit(): void {
  }
}

