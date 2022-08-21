# Proxy详解
* 说明:
    - 使用Proxy类,可以为一个对象创建一个代理对象,操控代理对象就修改源对象,但是可以对对象的行为作出限制
    - 语法:
        - target:为需要代理的对象,即目标对象或者称为源对象
        - handler:为代理该对象的某些行为和操作的对象,称为处理器对象
        - new Proxy(target,handler);
        [以下为handler配置详解]
* get()方法
    - get方法用于拦截某个属性的读取操作
    - get方法可以继承,如果将代理对象设置为某个对象原型,如果访问该对象中没有需要的属性,就会通过原型链查找,然后就会触发get方法拦截
    - 注意:如果一个属性不可配置（configurable）且不可写（writable），则 Proxy 不能修改该属性，否则通过 Proxy 对象访问该属性会报错。
    - 参数:
        1. target
        2. key
        3. context(上下文,指向当前的Proxy实例对象)
    - 语法:
        - get(target,key,context){ 
            //this为当前的处理器对象
            return target[key];
         };
* set()方法
    - set方法用来拦截某个属性的赋值操作
    - 注意:如果目标对象自身的某个属性不可写，那么set方法将不起作用
    - 参数:
        1. target
        2. key
        3. newValue
        4. context
    - 语法:
        - set(target,key,newvalue,context) {
            return  Reflect.set(target,key,newValue,context);
        };
* apply()方法
    - apply方法拦截函数的调用、call和apply操作。
    - 参数:
        1. target
        2. ctx(上下文)
        3. args(参数列表)    
    -    
* has()方法
    - has()方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符。
    - 参数:
        1. target
        2. key(键值)
    - has(target,key) {
        return Reflect.has(target,key);
    }
* construct()方法
    - construct()方法用于拦截new命令
    - 注意:construct()方法中的this指向的是handler，而不是实例对象。
    - 参数:
        1. target
        2. args(构造函数的参数列表)
        3. newTarget(创造实例对象时,new命令作用的构造函数)
    - 语法:
        - construct(target,args,newTarget) {
            return Reflect.construct(target,args,newTarget);
        }
* deleteProperty()方法
    - deleteProperty方法用于拦截delete操作
    - 如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除。
    - 注意:目标对象自身的不可配置（configurable）的属性，不能被deleteProperty方法删除，否则报错。
    - 参数:
        1. target
        2. key
    - 语法:
        - deleteProperty(target,key) {
            return Reflect.deleteProperty(target,key);
        }
* defineProperty()方法 
    - defindProperty方法由于拦截Object.defindProperty方法
    - 注意:如果目标对象不可扩展（non-extensible），则defineProperty()不能增加目标对象上不存在的属性，否则会报错。另外，如果目标对象的某个属性不可写（writable）或不可配置（configurable），则defineProperty()方法不得改变这两个设置。
    - 参数:
        1. target
        2. key
        3. descriptor(描述)
    - 语法:
        defineProperty(target,key,descriptor) {
            return Reflect.defineProperty(target,key,descriptor)
        }
* getOwnPropertyDescriptor()方法
    - getOwnPropertyDescriptor()方法拦截Object.getOwnPropertyDescriptor(),返回一个属性描述对象或者undefined。
    - 参数:
        1. target
        2. key
    - 语法:
        getOwnPropertyDesrciptor(target,key) {
        return Reflect.getOwnPropertyDescriptor(target.key);
    }
* getPrototypeOf()方法
    - getPrototypeOf()方法主要用来拦截获取对象原型
    - 具体来说,拦截下面这些操作:
        - Object.prototype.__proto__
        - Object.prototype.isPrototypeOf()
        - Object.getPrototypeOf()
        - Reflect.getPrototypeOf()
        - instanceof
    - 参数:
        1. target
    - 语法:
        getPrototypeOf(target) {
            console.warn(`正在访问${target}的原型对象...`);
            return Reflect.getPrototypeOf(target);
    }
* isExtensible()方法
    - isExtensible()方法拦截Object.isExtensible()操作。
    - 这个方法有一个强限制，它的返回值必须与目标对象的isExtensible属性保持一致，否则就会抛出错误。
    - 参数: 
        1. target
    - 语法:
        - isExtensible(target) {
            console.warn(`扩展属性`);
            return Reflect.isExtensible(target);
    }
* ownKeys()方法
    - ownKeys()方法用来拦截对象自身属性名的读取操作
    - 在读取属性的过程中会调用getOwnPropertyDescriptor方法获取描述对象
    - 具体操作如下:
        - Object.getOwnPropertyNames()
        - Object.getOwnPropertySymbols()
        - Object.keys()
        - for...in循环
    - 参数:
        1. target
    - 语法:
        ownKeys(target) {
        return Reflect.ownKeys(target);
    }
* preventExtensions()方法  
    - preventExtensions()方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值。
    - 这个方法有一个限制,只有目标对象不可扩展时（即Object.isExtensible(proxy)为false），proxy.preventExtensions才能返回true，否则会报错。
    - 参数:
        1. target
    - 语法:
        - preventExtensions(target) {
            return Reflect.preventExtensions(target);
    }
* setPropertyOf()方法
    - setPrototypeOf()方法主要用来拦截Object.setPrototypeOf()方法。
    - 注意:该方法只能返回布尔值，否则会被自动转为布尔值。另外，如果目标对象不可扩展（non-extensible），setPrototypeOf()方法不得改变目标对象的原型。
    - 参数:
        1. target
        2. proto(原型)
    - 语法:
        -  setPrototypeOf(target,proto) {
            return Reflect.setPrototypeOf(target,proto);
    }
* Proxy.revocable()方法 
    - Proxy.revocable()方法返回一个可取消的 Proxy 实例。
    - 参数:
        - target
        - handler
    - 返回值:返回一个包含了代理对象本身和它的撤销方法的可撤销 Proxy 对象。
# Reflect(反映)
* 说明:
    - 将对于对象的一些行为操作封装在了这个类里,实现了函数式操作对象
    - 方法和以上的方法一样