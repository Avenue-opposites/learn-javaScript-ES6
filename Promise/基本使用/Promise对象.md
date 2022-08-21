# Promise的state(状态) 
   * pending(未决定的)
   * resolved(解决)/fulfilled(满足)
   * rejected(拒绝)/resolved(解决)

    成功的结果数据为value,失败的结果为reason(理由)
# Promise对象的值
    实例对象的另一个属性 PromiseResult
    保存着异步任务 成功||失败的结果 
   * resolve
   * reject
# Promise(excutor) {}
   * executor 函数:执行器 (resolve,reject) => {}
    * resolve 函数:成功时调用
    * reject 函数:失败时调用
   * tips:excutor会在Promise内部同步执行
# Promise.resolve方法
   * 如果参数为非Promise对象,则返回的结果为新的成功Promise对象
   * 如果参数为Promise对象,则参数的结果决定resolve的结果
# Promise.reject方法
   * 无论传入任何参数,都返回一个新的失败的Promise对象,而且这个Promise对象的结果是传入的参数
# Promise.all方法
   * 参数:一个Promise对象数组
   * 返回:如果Promise对象数组中的状态都是成功,则返回新的成功Promise对象,其结果是数组,否则返回失败Promise对象,结果为失败对象的结果
# Promise.race方法
   * 参数:一个Promise对象数组
   * 返回:第一个改变状态的Promise对象
# Promise对象状态改变方法
   * resolve() pending => fulfilled
   * reject() pending => rejected
   * throw 'Error'; 抛出错误
# Promise能否执行多个回调
   * 能
# Promise指定多个回调
   * 当改变状态是同步任务,就先改变状态,然后指定回调
   * 如果是异步任务,就先指定回调,再改变状态
   # 如何先改变状态再指定回调
      * 在执行器中直接调用resolve()或reject()
      * 延长更长时间再调用then()
# Promise的then方法返回的结果状态由什么决定