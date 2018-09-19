class Sorter {
  constructor() {
   this.obj = [];
   this.comparator = (a,b) => a - b;
  }

  add(element) {
   this.obj.push(element); 
  }

  at(index) {
  return this.obj[index];
  }

  get length() {
  return this.obj.length;
  }

  toArray() {
    return this.obj;
  }

  sort(indices) {
   let filterObj = this.obj.filter((item, index) => {
     return indices.includes(index);
   });
   filterObj.sort(this.comparator).reverse();
   this.obj = this.obj.map((item, index) => {
     return indices.includes(index) ? filterObj.pop() : item;
   });
   return this.obj;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;