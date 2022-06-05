import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-password-generator",
  templateUrl: "./password-generator.component.html",
  styleUrls: ["./password-generator.component.css"],
})
export class PasswordGeneratorComponent implements OnInit {
  key1!: number;
  key2!: number;

  tempArray1: Array<number> = [];
  tempArray2: Array<string> = [];
  dictMap: { [a: string]: number } = {};
  psswd: string = "";

  constructor() {}

  ngOnInit(): void {
    for (let i = 10; i <= 35; i++) {
      this.tempArray1.push(i);
    }
    for (let i = 97; i <= 122; i++) {
      this.tempArray2.push(String.fromCharCode(i));
      i = i + 1;
    }
    for (let i = 98; i <= 122; i++) {
      this.tempArray2.push(String.fromCharCode(i));
      i = i + 1;
    }
    for (let i = 0; i <= 25; i++) {
      let KEY = this.tempArray2[i] as string;
      let VALUE = this.tempArray1[i] as number;
      this.dictMap[KEY] = VALUE;
    }
    console.log("tempArray1", this.tempArray1);
    console.log("tempArray2", this.tempArray2);
    console.log("dictMap", this.dictMap);
  }

  key1Update(event: KeyboardEvent) {
    let res = (event.target as HTMLInputElement).value;
    this.key1 = Number(res);
    console.log("key1", this.key1);
  }

  key2Update(event: KeyboardEvent) {
    let res = (event.target as HTMLInputElement).value;
    this.key2 = Number(res);
    console.log("key2", this.key2);
  }

  calculate() {
    this.psswd = (this.key1 + this.key2).toString();
  }
}
