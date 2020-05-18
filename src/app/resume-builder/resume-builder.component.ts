import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.css']
})
export class ResumeBuilderComponent implements OnInit {
  resumedata;
  constructor() { }

  downloadpdf() {
    const option = {
      margin: 1,
      filename: 'output.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', orientation: 'portrait' }

    }
    const element: Element = document.getElementById("mainArea");
    console.log(element)

    html2pdf()
      .from(element.innerHTML)
      .set(option)
      .save()
  }

  ngOnInit() {
    this.resumedata = JSON.parse(localStorage.getItem("formdata"))
    console.log(this.resumedata);
  }

}
