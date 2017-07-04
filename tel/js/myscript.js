var user = {

    lists: [],

    list: function () {
        console.log(this.lists)
    },

    addUser: function (user) {
        // this.lists.push(user);
        // console.log(user.telefon);
        var bool = false;
        for (var obj in this.lists) {
            if (this.lists[obj].telefon == user.telefon) {
                bool = true;
                console.log('Такой юзей  ' + user.lastname + ' уже есть.');
            }
        }
        if (!bool) this.lists.push(user);
    },

    getUser: function (tel) {
        var bool = false;
        for (var obj in this.lists) {
            if (this.lists[obj].telefon == tel) {
                bool = true;
                return console.log(this.lists[obj])
            }
        }
        if (!bool) console.log('Такого номера ' + tel + ' - нет');
    },

    findByTel: function(tel) {
        var bool = false;
        for (var obj in this.lists) {
            if (this.lists[obj].telefon == tel) {
                bool = true;
                return console.log(this.lists[obj].lastname)
            }
        }
        if (!bool) console.log('Такого номера ' + tel + ' - нет');
    },

    deleteUser: function (tel) {
        for (var obj in this.lists) {
            if (this.lists[obj].telefon == tel) {
                this.lists.splice(obj, 1)
            };
        }
    }
};

var users = {
    lastname: "Иванов",
    firstname: "Василий",
    telefon: '11-11-12'
};
var users1 = {
    lastname: "Иванов",
    firstname: "Василий",
    telefon: '11-11-13'
};
var users2 = {
    lastname: "Иванов",
    firstname: "Василий",
    telefon: '11-11-14'
};
var users3 = {
    lastname: "Иванов",
    firstname: "Василий",
    telefon: '11-11-15'
};
var users4 = {
    lastname: "Иванов",
    firstname: "Василий",
    telefon: '11-11-16'
};
var users5 = {
    lastname: "Иванов",
    firstname: "Василий",
    telefon: '11-11-16'
};


user.addUser(users);
user.addUser(users1);
user.addUser(users2);
user.addUser(users3);
user.addUser(users4);
user.addUser(users4);
user.addUser(users5);

user.getUser('11-11-10');
user.deleteUser('11-11-12');
user.list();

