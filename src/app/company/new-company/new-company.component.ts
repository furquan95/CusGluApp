import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})



export class NewCompanyComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  skillsAvailable:any[] = []

  skillInfoForm = this.fb.group({
    skillName: new FormControl('', [Validators.required]),
    skillRating: new FormControl('', [Validators.required]),
  });

  eductionInfo = this.fb.group({
    instituteName: new FormControl('', [Validators.required]),
    courseName: new FormControl('', [Validators.required]),
    completedYear: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder, private router: Router) { 
    let skills:any = localStorage.getItem('skills')
    this.skillsAvailable = (skills)?JSON.parse(skills):[]  

    this.form = this.fb.group({
      companyName: [null, [Validators.required, Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.maxLength(100)]],
      address: [null],
      phoneNumber:[null,[Validators.required, Validators.maxLength(15), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      empInfo: this.fb.group({
         empName: [null, [Validators.required, Validators.maxLength(25)]],
         designation: [null, [Validators.required]],
         joinDate: [null, [Validators.required]],
         email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.maxLength(100)]],
         phoneNumber: [null,[Validators.required, Validators.maxLength(15), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
         skillInfo: this.fb.array([]),
         eductionInfo: this.fb.array([])
      })
    });
  
  }

  ngOnInit(): void {
  }



  get skills() {
    return this.form.controls["empInfo"].get('skillInfo') as FormArray;
  }

  get educationInfo() {
    return this.form.controls["empInfo"].get('eductionInfo') as FormArray;
  }

  mySkillFormArray() {
    
    let myForm = this.form.controls['empInfo']
    return myForm.get('skillInfo') as FormArray;
  }

  myEducationFormArray() {
    
    let myForm = this.form.controls['empInfo']
    return myForm.get('eductionInfo') as FormArray;
  }


  addNewSkill(){
    let skillInfoForm = this.skillInfoForm
    this.skills.push(skillInfoForm);
  }

  addEducationInfo(){
    let eductionInfo = this.eductionInfo
    this.educationInfo.push(eductionInfo);
  }



  saveDetails(form: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
    let formData:any = form.value;
    formData['createdDate'] = new Date()
    if(localStorage.getItem('companyData')){
      let data:any = localStorage.getItem('companyData');
      (data)?data=JSON.parse(data):'';
      if(Array.isArray(data)){
        data.push(formData);
        localStorage.setItem('companyData',JSON.stringify(data))
      }
      else{
        let formArrayNew =[]
        formArrayNew.push(formData);

        localStorage.setItem('companyData',JSON.stringify(formArrayNew))
      }
      
      
    }else{
      let formArrayNew =[]
      formArrayNew.push(formData);

      localStorage.setItem('companyData',JSON.stringify(formArrayNew))
    }

    this.router.navigate(['/company/list']);
    
  }
}
