const request=require('request')
const fs=require('fs')
let url='http://m10.music.126.net/20181031144438/9067dc3b9d59408a40bee01c58b2724e/ymusic/96c5/507f/12cf/3de773142bac9bc6c3fb646c00dadd0d.mp3'
let url2=`http://dl.stream.qqmusic.qq.com/C400000IFr9p1dV68u.m4a?guid=856684624&vkey=ED991AE889E939B7960A59A033AAE5B3D33E34651609B4D4767B8CE8132E86430B1291911358B74DED7F5A68251FEA420A71C8386F1E198F&uin=0&fromtag=66
`
request(url).pipe(fs.createWriteStream('./hehe.mp3'))
