const TestEmitter = require('events');

class MyEmitter extends TestEmitter {}
// 通过es类的继承创建 事件类

const myEmitter = new MyEmitter();
//通过new 来实例化 类

// class.on('事件名称','事件触发函数')
// class.emit('事件名称')

myEmitter.on('event', () => {
  console.log('an event occurred!');
});
// myEmitter.once('play',(name,age)=>{
// 	console.log('play'+name+age)
// }) 只能触发
// myEmitt一次er.emit('event');
// myEmitter.on('play',(name,age)=>{
// 	console.log('play'+name+age)
// }) 
// myEmitter.emit('play','篮球',16);

// // myEmitter.removeAllListeners() 移除所有是的事件监听
// myEmitter.removeListener('play',()=>{
// 	console.log(111)
// })
// myEmitter.emit('play','篮球',16);
// myEmitter.emit('play','篮球',16);

let callback=(name,age)=>{
   console.log('play'+name+age)
}
myEmitter.on('play',callback)

myEmitter.emit('play','篮球',16)
myEmitter.removeListener('play',callback)

myEmitter.emit('play','篮球',16)
myEmitter.emit('play','篮球',16)
//removeListener必须移除  事件监听的触发函数