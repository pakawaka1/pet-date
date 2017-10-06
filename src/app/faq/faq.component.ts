import { Component, OnInit } from '@angular/core';
import { faqRecord } from './faqRecord.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  title = 'FAQ';
  faqItems = Array();

  constructor() { }

  ngOnInit() {
    this.initQA();
  }

  private initQA() {
    this.faqItems.push( new
      faqRecord(1,
      'How does the service work?',
      'You first find a pet, and then reserve the pet for an activity.'));

    this.faqItems.push( new
      faqRecord(2,
      'How much does this service cost?',
      '$0.00'));



  }

}
