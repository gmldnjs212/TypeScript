"use strict";
class ClassName {
    static getInstance() {
        // ClassName으로부터 만든 object가 있으면 그걸 리턴
        // 없으면, 만들어서 리턴
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
    constructor() { }
}
ClassName.instance = null;
const classname_a = ClassName.getInstance(); // a는 최초이기 때문에 만들어서 리턴
const classname_b = ClassName.getInstance(); // a에서 만들었기 때문에 그걸 리턴
console.log((a === b));
