import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
interface Alert {
  type: string;
  message: string;
}


 const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
}
];
@Component({
  selector: 'app-listapp',
  templateUrl: './listapp.component.html',
  styleUrls: ['./listapp.component.css']
})


export class ListappComponent implements OnInit {
  alerts: Alert[];
  title = 'appBootstrap';
  closeResult: string;
  rows = [
    {
      "ID" : "1",
      "Name" : "Ussd comodits",
      "local" : "21",
      "extenal" : "Male",
      "status" : true
    },
    {
      "ID" : "2",
      "Name" : "Investment clubs",
      "local" : "21",
      "extenal" : "Male",
      "status" : false
    },{
      "ID" : "3",
      "Name" : "Unit Trust",
      "local" : "21",
      "extenal" : "Male",
      "status" : true
    },{
      "ID" : "4",
      "Name" : "Test Live",
      "local" : "21",
      "extenal" : "Male",
      "status" : false
    },{
      "ID" : "5",
      "Name" : "InhensementSS",
      "local" : "21",
      "extenal" : "Male",
      "status" : true
    }

  ]

  onSaveChanged(value:boolean){
    //this.reset()
    console.log(value);
}



  constructor(private modalService: NgbModal) { }
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
  }

}
