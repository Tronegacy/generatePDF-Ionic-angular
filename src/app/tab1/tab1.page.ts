import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  constructor() {}

  invoiceNo="123";
  createdAt="Nov 3, 2022 3:49 PM";
  address="quận Bình Thạnh, Tp.HCM";
  username="Eric Ngo";
  paymentMethod="Bank";
  paymentId="1123";
  items=[
      {
          name:"Apple",
          price: 12,
          qty: 10,
          currency: "$"
      },
      {
          name:"Banana",
          price: 18,
          qty: 20,
          currency: "$"
      },
      {
          name:"Orange",
          price: 25,
          qty: 5,
          currency: "$"
      },
      {
          name:"Apple",
          price: 12,
          qty: 10,
          currency: "$"
      },
      {
          name:"Banana",
          price: 18,
          qty: 20,
          currency: "$"
      },
      {
          name:"Orange",
          price: 25,
          qty: 5,
          currency: "$"
      },
      {
          name:"Apple",
          price: 12,
          qty: 10,
          currency: "$"
      },
      {
          name:"Banana",
          price: 18,
          qty: 20,
          currency: "$"
      },
      {
          name:"Orange",
          price: 25,
          qty: 5,
          currency: "$"
      },
  ];

  total() {
    const data = [
      {
          name:"Apple",
          price: 12,
          qty: 10,
          currency: "$"
      },
      {
          name:"Banana",
          price: 18,
          qty: 20,
          currency: "$"
      },
      {
          name:"Orange",
          price: 25,
          qty: 5,
          currency: "$"
      },
      {
          name:"Apple",
          price: 12,
          qty: 10,
          currency: "$"
      },
      {
          name:"Banana",
          price: 18,
          qty: 20,
          currency: "$"
      },
      {
          name:"Orange",
          price: 25,
          qty: 5,
          currency: "$"
      },
      {
          name:"Apple",
          price: 12,
          qty: 10,
          currency: "$"
      },
      {
          name:"Banana",
          price: 18,
          qty: 20,
          currency: "$"
      },
      {
          name:"Orange",
          price: 25,
          qty: 5,
          currency: "$"
      },
    ]

    const result = data.reduce((total,curr)=>{      
      return total + curr.price * curr.qty
    },0)

    return `${data[0].currency} ${result}`
  }

  public openPDF(items): void {
    let DATA: any = document.getElementById('content');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const pageHeight = 25 * items.length      
      let PDF = new jsPDF('p', 'mm', [250, 260 + pageHeight]);
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
}
