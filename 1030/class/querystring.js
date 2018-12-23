const  querystring=require("querystring");
//对url 中的query这一项操作，和split 对比记忆
// let query='us=123&ps=456&age=222';
// let test='us=123?ps=456?age=222'
// console.log(querystring.parse(test,'?','='))

// let array={ us: '123', ps: '456', age: '222' };
// console.log(querystring.stringify(array,"?","@"))
// 只要是query类型的string 都可用


// let query='us=123&ps=456&age=222';
// console.log(querystring.escape(query))
// let string='us%3D123%26ps%3D456%26age%3D222'
// console.log(querystring.unescape(string))


// parse   string->obj
// stringify  obj->string

// escape  编码
// unescape 解码