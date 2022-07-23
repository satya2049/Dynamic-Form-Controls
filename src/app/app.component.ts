import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;

  ngOnInit(){
    this.form = new FormGroup({
      personalDetails:new FormGroup({
        firstName: new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        email:new FormControl('')
      }),
      gender:new FormControl('male'),
      skillSet:new FormArray([
        new FormControl(null,Validators.required)
      ])
    })
  }

  onSubmit(){
    this.submitted=true;
    console.log(this.form);
  }

  get skillSet () {
    return this.form.get('skillSet') as FormArray
  }

  get personalDetails(){
    return this.form.get('personalDetails') as FormGroup
  }

  AddSkill(){
    console.log("addskill is called");
    this.skillSet.push(new FormControl(null,Validators.required))
  }

  deleteFormControl(i:number){
    console.log("delete is called")
    this.skillSet.removeAt(i);
  }
}

