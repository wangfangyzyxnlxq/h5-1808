function sayhello(user,msg){
   console.log(`${user}说${msg}`)
}
let name='wangyi'

function test(){

}
//暴露接口
module.exports={sayhello,name,test}