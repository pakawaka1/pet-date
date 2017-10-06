/**
 * Created by jim on 10/3/17.
 */

export class faqRecord {
  public num: number;
  public question: string;
  public answer: string;

  constructor ( num, q, a ) {
    this.num = num;
    this.question = q;
    this.answer = a;
  }
}
