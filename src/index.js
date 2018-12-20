/*class Person{
  constructor(name){
    this.name=name;
  }
  getName(){
    return this.name;
  }
}

class Student extends Person{
  constructor(name,number){
    super(name);
    this.number=number;
  }
  study(){
    alert(`${this.name} ${this.number} study`)
  }
}
var xiaoming=new Student('xiaoming','A1');
var xiaohong=new Student('xiaohong','A2');
xiaoming.study();
console.log(xiaoming.getName());

xiaohong.study();
console.log(xiaohong.getName());*/
class jQuery{
  constructor(selector){
    let slice=Array.prototype.slice;
    let dom=slice.call(document.querySelectorAll(selector));//DOM转化为数组
    for(let i=0;i<dom.length;i++){
      this[i]=dom[i];
    }
    this.length=dom.length;
    this.selector=selector||'';
  }
  addClass(){
    console.log(111)
  }
}
window.$=function (selector) {
  return new jQuery(selector);
}

console.log($("li"))
