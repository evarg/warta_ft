import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Building } from 'src/app/model/building';
import { BuildingsService } from 'src/app/services/buildings.service';




@Component({
  selector: 'app-buildings-add',
  templateUrl: './buildings-add.component.html',
  styleUrls: ['./buildings-add.component.scss']
})
export class BuildingsAddComponent implements OnInit {

  buildingForm: FormGroup;

  componentTitle: string = "Dodaj budynek"
  buildingID: number = 0;
  formMode: string = 'Add'

  constructor(
    private route: ActivatedRoute,
    private buildingsService: BuildingsService,
    private fb: FormBuilder) {

    this.buildingForm = fb.group({
      'name': ['', [Validators.required, Validators.minLength(2)]],
      'desc': ['']
    })
  }

  onSubmit() {
    console.log(this.buildingForm.value)
  }

  onSave() {
    this.buildingsService.create(this.buildingForm.value).subscribe(
      data => {
        console.log(data)
      },
      error => {
        switch (error.status) {
          case 422: {
            this.buildingForm.controls['name'].setErrors({ required: true })
            break
          }
          case 500: {
            console.error("Błąd serwera 500")
            break
          }
        }
      }
    )
  }

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
      this.componentTitle = "Edycja budynku"
      this.buildingsService.get(this.route.snapshot.params['id']).subscribe(
        data => {
          this.buildingID = data.data.id
          this.buildingForm.setValue({
            name: data.data.name,
            desc: data.data.desc
          })
        },
        error => {
        }
      )
    }
  }

  onReload(): void {
    this.buildingForm.controls["desc"].patchValue("desc")
  }

}
