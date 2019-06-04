define("ts/utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function delimeterMsg(str) {
        console.log(`\n*************** ${str} *****************\n`);
    }
    exports.default = delimeterMsg;
});
define("ts/basics", ["require", "exports", "ts/utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const str = 'aaa';
    const tuple = ["str", 1];
    var DIRECTIONS;
    (function (DIRECTIONS) {
        DIRECTIONS[DIRECTIONS["UP"] = 1] = "UP";
        DIRECTIONS[DIRECTIONS["DOWN"] = 2] = "DOWN";
        DIRECTIONS[DIRECTIONS["LEFT"] = 3] = "LEFT";
        DIRECTIONS[DIRECTIONS["RIGHT"] = 4] = "RIGHT";
    })(DIRECTIONS || (DIRECTIONS = {}));
    ;
    function basics() {
        utils_1.default('BASICS');
        const up = DIRECTIONS.UP;
        console.log('Enum example:', DIRECTIONS);
        console.log('Chosen direction:', DIRECTIONS[up]);
        console.log('Tuple example:', tuple);
        console.log('String example:', str);
    }
    exports.default = basics;
});
define("ts/functions", ["require", "exports", "ts/utils"], function (require, exports, utils_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // type appendType = (str1: string, str2: string) => string;
    // OR
    const append = function (str, append) {
        return str + append;
    };
    function optional(arg1 = 2, arg2, arg3 = append('a', 'b')) {
        console.log('example of default and optional parameters');
    }
    function rest(name, ...values) {
        console.log('example of using rest parameters.');
    }
    function overload(arg) {
        switch (typeof arg) {
            case 'number':
                console.log('example of overloading with a number');
                break;
            case 'string':
                console.log('example of overloading with a string');
                break;
            case 'boolean':
                console.log('example of overloading with a boolean');
                break;
            default:
                console.log('example of overloading with any');
                break;
        }
    }
    function functions() {
        utils_2.default('FUNCTIONS');
        console.log('optional parameters example: no parameters', optional());
        console.log('optional parameters example: 1st and 3rd parameters', optional(1, 's'));
        console.log('rest parameters example', rest('rest', 1, 2, 3, 4, 5, 6, 7));
    }
    exports.default = functions;
});
define("ts/interfaces", ["require", "exports", "ts/utils"], function (require, exports, utils_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.id = new Date().getTime();
        }
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        sayHelloTo(name) {
            return `Hello ${name}, I am ${this.fullName()}`;
        }
    }
    ;
    function interfaces() {
        utils_3.default('INTERFACES');
        const person = new Person('Leon', 'Yalin');
        console.log('create a class using interface:', person);
        console.log('basic interface example:', person.sayHelloTo('World'));
    }
    exports.default = interfaces;
});
define("ts/classes", ["require", "exports", "ts/utils"], function (require, exports, utils_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AbstractPerson {
    }
    class Person extends AbstractPerson {
        constructor(firstName, lastName) {
            super();
            this.firstName = firstName;
            this.lastName = lastName;
            this.id = new Date().getTime();
        }
        getHobby() {
            return 'MYy hobby is writing TypeScript!';
        }
        static sayHelloToAll() {
            return 'Hello all!';
        }
        fullName() {
            throw new Error("Method not implemented.");
        }
        sayHelloTo(name) {
            return `Hello ${name} from ${this.fullName()}`;
        }
        ;
        toString() {
            return `Person[id=${this.id}, firstName=${this.firstName}, lastName=${this.lastName}]`;
        }
    }
    class Student extends Person {
        constructor(firstName, lastName, average) {
            super(firstName, lastName);
            this.firstName = firstName;
            this.lastName = lastName;
            this.average = average;
        }
        getAverage() {
            return this.average;
        }
    }
    const ClassExpression = class extends AbstractPerson {
        getHobby() {
            return 'My hobby is writing class exressions!';
        }
    };
    function classes() {
        utils_4.default('CLASSES');
        const person = new Person('Leon', 'Yalin');
        console.log('create class example: ' + person);
        const student = new Student('Nelly', 'Yalin', 82);
        console.log('class inheritance example: ' + student);
        console.log('average is: ' + student.getAverage());
        const classExpression = new ClassExpression();
        console.log('class expression example: ' + classExpression.getHobby());
    }
    exports.default = classes;
});
var Utils;
(function (Utils) {
    function append(str, appender) {
        return str + appender;
    }
    Utils.append = append;
    let Arrays;
    (function (Arrays) {
        function find(arr, el) {
            return arr.find(item => item === el);
        }
        Arrays.find = find;
    })(Arrays = Utils.Arrays || (Utils.Arrays = {}));
})(Utils || (Utils = {}));
/// <reference path="namespaces.ts" />
define("ts/modulesAndNamespaces", ["require", "exports", "ts/utils"], function (require, exports, utils_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function modulesAndNamespaces() {
        utils_5.default('MODULES AND NAMESPACES');
        console.log('namespace example: ', Utils.append('Hello ', 'World'));
    }
    exports.default = modulesAndNamespaces;
});
define("app", ["require", "exports", "ts/basics", "ts/functions", "ts/interfaces", "ts/classes", "ts/modulesAndNamespaces"], function (require, exports, basics_1, functions_1, interfaces_1, classes_1, modulesAndNamespaces_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function main() {
        basics_1.default();
        functions_1.default();
        interfaces_1.default();
        classes_1.default();
        modulesAndNamespaces_1.default();
    }());
});
//# sourceMappingURL=bundle.js.map