const url=require('url');
//对url进行解析
// url.parse()
// url.format();
// let string='https://user:pass@sub.host.com:8080/p/a/t/h?query=string&use=123#hash'
// let cdn='//www.baidu.com'
// console.log(url.parse(cdn,true,true))
// url.parse("要解析的url"，'query格式数组或者字符串'，"是否解析 // 地址类型")
//一个url地址几部分构成
// let cdn='http://www.baidu.com:3000/api/test?us=123#test'
// console.log(url.parse(cdn,true))

// let urlobj={
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com:3000',
//   port: '3000',
//   hostname: 'www.baidu.com',
//   hash: '#test',
//   search: '?us=123',
//   query: { us: '123' },
//   pathname: '/api/test',
//   path: '/api/test?us=123',
//   href: 'http://www.baidu.com:3000/api/test?us=123#test' }

//   console.log(url.format(urlobj))

// let array={ us: 'wangyi', ps: '456',age:15 };
// let us=array.us
// let ps=array.ps
// let {us,ages}=array
// console.log(us+ages)
// es6结构对象