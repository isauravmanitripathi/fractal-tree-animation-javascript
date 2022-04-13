function Branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
    
    this.show = function() {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }
}