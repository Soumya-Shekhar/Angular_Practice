import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dpc-replica",
  templateUrl: "./dpc-replica.component.html",
  styleUrls: ["./dpc-replica.component.css"],
})
export class DPCReplicaComponent implements OnInit {
  listVal: string = "";
  tempValue = "";
  listValLen: number = 0;
  selectList: string[] = [
    "100 Days Until PHP",
    "1st Extension Comments",
    "1st Extension Filed By Compliance Attachment",
    "1st Extension Filed By Compliance Attachment Exists",
    "1st Extension Granted Attachment",
    "1st Extension Granted Attachment Process",
    "Exclude Flag - History Log",
    "Exclude Flag Review Comments",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  selectedList: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  add(item: string) {
    if (!this.selectedList.includes(item)) {
      this.selectedList.push(item);
      this.listValChanger();
      this.listValLen = this.selectedList.length;
    }
  }
  remove(item) {
    let index = this.selectedList.indexOf(item);
    this.selectedList.splice(index, 1);
    this.listValChanger();
    this.listValLen = this.selectedList.length;
  }

  listValChanger() {
    for (let i = 0; i < this.selectedList.length; i++) {
      if (this.tempValue.length == 0) {
        this.tempValue = this.selectedList[i];
      } else {
        this.tempValue = this.tempValue + "," + this.selectedList[i];
      }
    }
    this.listVal = this.tempValue;
    this.tempValue = "";
    return this.listVal;
  }
}
