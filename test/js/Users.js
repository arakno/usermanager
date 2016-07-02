
class Users {
    constructor() {
        this.users = [];
    }
    get(name) {
        var usr = [];
        if(this.arguments == null){
            return this.users;
        } else {
            return this.users.indexOf(name);
        }
    }
    add( name, group ) {
        this.users.push({ 
            id   : new Date().getUTCMilliseconds(),
            name : name,
            group: group
        });
    }
    remove( id, name ) {
        var del = null;
        this.users.forEach(function(val, idx){
            if(id == val.id) {
                del = idx;
                return;
            }
        });
        this.users.splice(del, 1);
    }

};

 
export default Users;