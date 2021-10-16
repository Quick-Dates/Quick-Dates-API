declare global {
  interface Array<T> {
    changePosition(to: number, from: number): any[];
  }
}

export default function prototypes() {
  Array.prototype.changePosition = function(from: number, to: number){
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
  }
};
