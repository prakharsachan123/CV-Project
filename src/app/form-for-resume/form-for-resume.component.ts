import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-for-resume',
  templateUrl: './form-for-resume.component.html',
  styleUrls: ['./form-for-resume.component.css']
})
export class FormForResumeComponent implements OnInit {
  resumeform: FormGroup;
  image;
  constructor(private fb: FormBuilder, private route: Router) { }

  upload(event) {
    if (event.target.files.length > 0) {
      this.image = event.target.files[0];
      console.log(this.image);
    }
  }


  onSubmit() {
    var resumedata = this.resumeform.getRawValue();
    console.log(resumedata);
    localStorage.setItem("formdata", JSON.stringify(resumedata));
    localStorage.setItem("image", JSON.stringify(this.image));
    this.route.navigate(['/cv']);

  }

  ngOnInit() {
    this.validation();
    localStorage.removeItem("formdata");
    localStorage.removeItem("image");
  }
  validation() {
    this.resumeform = this.fb.group({
      email: ['', Validators.required],
      phone: ['', Validators.required],
      fullname: ['', Validators.required],
      school: ['', Validators.required],
      college: ['', Validators.required],
      certification: ['', Validators.required],
      project: ['', Validators.required],
      experience: ['', Validators.required],
      profile: ['', Validators.required],
      keyskill1: ['', Validators.required],
      keyskill2: ['', Validators.required],
      keyskill3: ['', Validators.required],
      keyskill4: ['', Validators.required],
      keyskill5: ['', Validators.required],
      linkedin: ['', Validators.required]
    })
  }

}
