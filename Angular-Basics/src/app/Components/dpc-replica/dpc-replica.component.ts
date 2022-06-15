import { Component, OnInit } from "@angular/core";
import Scrollbar from "smooth-scrollbar";

@Component({
  selector: "app-dpc-replica",
  templateUrl: "./dpc-replica.component.html",
  styleUrls: ["./dpc-replica.component.css"],
})
export class DPCReplicaComponent implements OnInit {
  scrollBarOptions = {
    alwaysShowTracks: true,
  };
  listVal: string = "";
  tempValue = "";
  listValLen: number = 0;
  categoryList: {
    name: string;
    isChildVisible: boolean;
    children: string[];
    isShowed: boolean;
    isShowedOnce: boolean;
  }[] = [
    {
      name: "100 Days Until PHP",
      isChildVisible: true,
      children: ["a1", "b1", "c1"],
      isShowed: false,
      isShowedOnce: false,
    },
    {
      name: "1st Extension Comments",
      isChildVisible: true,
      children: ["a2", "b2", "c2"],
      isShowed: false,
      isShowedOnce: false,
    },
    {
      name: "1st Extension Filed By Compliance Attachment",
      isChildVisible: true,
      children: ["a3", "b3", "c3"],
      isShowed: false,
      isShowedOnce: false,
    },
    {
      name: "1st Extension Filed By Compliance Attachment Exists",
      isChildVisible: true,
      children: ["a4", "b4", "c4"],
      isShowed: false,
      isShowedOnce: false,
    },
    {
      name: "1st Extension Granted Attachment",
      isChildVisible: true,
      children: ["a5", "b5", "c5"],
      isShowed: false,
      isShowedOnce: false,
    },
    {
      name: "1st Extension Granted Attachment Process",
      isChildVisible: true,
      children: ["a6", "b6", "c6"],
      isShowed: false,
      isShowedOnce: false,
    },
    {
      name: "Exclude Flag - History Log",
      isChildVisible: true,
      children: ["a7", "b7", "c7"],
      isShowed: false,
      isShowedOnce: false,
    },
    {
      name: "Exclude Flag Review Comments",
      isChildVisible: true,
      children: ["a8", "b8", "c8"],
      isShowed: false,
      isShowedOnce: false,
    },
  ];
  selectedList: string[] = [];
  selectedCategoryList: {
    name: string;
    isChildVisible: boolean;
    children: string[];
  }[];

  constructor() {}

  ngOnInit(): void {
    Scrollbar.init(document.querySelector("#scroll"), this.scrollBarOptions);
    Scrollbar.init(document.querySelector("#scroll2"), this.scrollBarOptions);
  }

  add(item) {
    if (!this.selectedList.includes(item)) {
      this.selectedList.push(item);
      this.listValChanger();
    }
  }
  remove(item) {
    let index = this.selectedList.indexOf(item);
    this.selectedList.splice(index, 1);
    this.listValChanger();
  }

  listValChanger() {
    // for (let i = 0; i < this.selectedList.length; i++) {
    //   if (this.tempValue.length == 0) {
    //     this.tempValue = this.selectedList[i];
    //   } else {
    //     this.tempValue = this.tempValue + "," + this.selectedList[i];
    //   }
    // }
    // this.listVal = this.tempValue;
    // this.tempValue = "";
    // return this.listVal;
    let tempArray = [];
    this.selectedCategoryList = [];
    for (let i = 0; i < this.categoryList.length; i++) {
      let objMain = JSON.parse(JSON.stringify(this.categoryList[i]));
      for (let j = 0; j < objMain.children.length; j++) {
        if (this.selectedList.includes(objMain.children[j])) {
          if (!this.selectedCategoryList.includes(objMain)) {
            this.selectedCategoryList.push(objMain);
          }
          if (this.selectedCategoryList.includes(objMain)) {
            let ind = this.selectedCategoryList.indexOf(objMain);
            let childrenList = this.selectedCategoryList[ind].children;
            let updatedChildrenList = [];
            for (let k = 0; k < this.selectedList.length; k++) {
              if (childrenList.includes(this.selectedList[k])) {
                updatedChildrenList.push(this.selectedList[k]);
              }
            }
            this.selectedCategoryList[ind].children = updatedChildrenList;
          }
          if (!tempArray.includes(objMain.name)) {
            tempArray.push(objMain.name);
            // this.selectedCategoryList.push(objMain);
          }
        }
      }
    }
    for (let i = 0; i < tempArray.length; i++) {
      if (this.tempValue.length == 0) {
        this.tempValue = tempArray[i];
      } else {
        this.tempValue = this.tempValue + "," + tempArray[i];
      }
    }
    this.listVal = this.tempValue;
    this.listValLen = tempArray.length;
    this.tempValue = "";
    return this.listVal && this.listValLen && this.selectedCategoryList;
  }
  show(item: { name: string; isChildVisible: boolean; children: string[] }) {
    item.isChildVisible = !item.isChildVisible;
  }
}
