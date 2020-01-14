


export const msg = "Are you Ok?";


// 构造函数  (构造器 + 原型对象 + 静态对象 )
export class People{

    constructor(names,age){
        this.names = names;
        this.age = age;
    }

    // 原型对象
    say(){

    }

    todo(){

    }
}

People.hobby = ["eat","sleep"]


export class Student extends People{
    constructor(names,age,score){
        super(names,age);  // super 当函数时 指向是父类的 构造器 
        this.score = score;
    }

    goto(){

    }

    say(){
        return super.say();   // super 当做对象时 指向的是父类的 原型对象 
    }
}


Student.hobby = ["read","music"];


export class Component{
    constructor(){

    }

    render(){

    }

    componentWillMount(){

    }
}

export class App extends Component{
    
}
