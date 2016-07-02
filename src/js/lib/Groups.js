
class Groups {
    constructor() {
        this.groups = ["Musicians","Programmers","Designers","Doctors","Teachers"];
    }
    get() {
        return this.groups.sort();
    }
    add( name ) {
        this.groups.push(name);
    }
    remove( name ) {
        var idx = this.groups.indexOf(name);
        this.groups.splice(idx, 1);
    }
};
 
export default Groups;