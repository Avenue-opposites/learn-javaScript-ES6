//ES6 引进的新的声明字符串的方法 `string`

//声明模板字符串
// let str = `我也是一个字符串哦!`;
// console.log(str,typeof str);//"我也是一个字符串哦!" string

//1.模板字符串允许使用换行符
// let newstr = `form                                        <换行符>
//             to`;
// console.log(newstr);//form                 <换行符>                          to
// let oldstr = 'form
// to';//除非使用+拼接
// console.log(oldstr);//SyntaxError: Invalid or unexpected token

//2.模板字符串可以和变量拼接
// let num = 456;
// let str = `123${num}789`;
// console.log(str);//"123456789"
