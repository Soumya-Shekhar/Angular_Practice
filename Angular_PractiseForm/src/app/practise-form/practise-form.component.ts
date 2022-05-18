import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practise-form',
  templateUrl: './practise-form.component.html',
  styleUrls: ['./practise-form.component.css'],
})
export class PractiseFormComponent implements OnInit {
  public formGrp: FormGroup;
  public showTable = false;
  public showData: any = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGrp = this.fb.group({
      addRowFormArray: this.fb.array([
        this.fb.group({
          fte: [
            '',
            [
              Validators.required,
              Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$'),
            ],
          ],
          operator: [
            '',
            [
              Validators.required,
              Validators.pattern(/^[0-9]{1,19}(?:[.][0-9]{1,4})?$/),
            ],
          ],
          grouping: [
            '',
            [Validators.required, Validators.pattern(/^[a-zA-Z0-9%@&#]*$/)],
          ],
        }),
      ]),
    });
  }

  get formArry() {
    return this.formGrp.get('addRowFormArray') as FormArray;
  }

  addNew() {
    this.formArry.push(
      this.fb.group({
        fte: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 ]+$')]],
        operator: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[0-9]{1,19}(?:[.][0-9]{1,4})?$/),
          ],
        ],
        grouping: [
          '',
          [Validators.required, Validators.pattern(/^[a-zA-Z0-9%@&#]*$/)],
        ],
      })
    );
  }
  delete(i: number) {
    this.formArry.removeAt(i);
  }
  onSubmit() {
    this.showTable = true;
    let l = this.formArry.length;
    for (let i = 0; i < l; i++) {
      this.showData.push(this.formArry.at(i).value);
    }
    return this.showData;
  }
  keyPressNumeric(event: any) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode <= 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }
}
