const jsonServer = require('json-server');//在node里面使用json-server包
const db = require('./db.js');//引入mockjs配置模块  需要暴露一个对象
const Mock = require('mockjs');
const path = require('path');
const multer = require('multer');

let port = 3335; //端口
let mock = '/mock'; //接口别名

const server=jsonServer.create();//创建服务器

//配置服务器中间件
server.use(jsonServer.defaults({
    static:path.join(__dirname,'/public'),
}));
//抓取body数据
server.use(jsonServer.bodyParser);
let upload = multer({ dest: path.join(__dirname,'public','uploads') });
server.use(upload.any());

server.use((req,res,next)=>{

    if(req.url.includes("/signIn") || req.url.includes("/reg")){
        next();
    }else{
        if(req.headers.token && req.headers.token.length ===16){
            next()
        }else{
            setTimeout(()=>res.jsonp({
                "err": 2,
                "msg": "获取数据失败，token有误或者过期"
            }),1000)
        }
    }
})

//Mock-------------------------------
let Mo=Mock.Random,Mok=Mock.mock; //简写
let mapUserBookDate=(n)=>{
    var data=[];
    for(var i=1; i<=n; i++){
        let item=Mok({
            _id:1000+i,
            bookName:Mok('@ctitle(2,7)'),
            auth:Mo.cname(),
            'classify|1':["言情","文学","语言","玄幻","艺术","武侠","现实","历史","游戏","轻小说","短片"],
            'bookStat|4-1':true,
            'words|3-300':3,
            'price|15-80':15,
            bookDes:Mok('@cparagraph(3)'),
            pic:Mo.image('100x120',Mo.color(),Mo.cword(1,2)),
            'readerNum|1-99':1,
            'score|3-4.0-1':4,
            'articleNum|200-2000':200,
            time:'@integer(1189529603220,1589529603220)',
            'readStat|15-80':15,
        });
        data.push(item);
    }
    return data;
}
//模拟登录接口-----------------------------------------------
server.post(mock+'/signIn',(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    (username === 'hello' && password === 'hello')?
        res.jsonp({
            "err": 0,
            "msg": "登录成功",
            data:Mok({
                '_id|+1':5000,
                "userName": '@ctitle(2,8)',
                "pic": Mock.Random.image('75x75',Mock.Random.color(),Mock.Random.cword(1)),
                "vip|4-1": true,
                "vipTime": '@integer(1597116154371,1597119154371)',
                "money|20-99": 20,
                'todayRead|3600-7200':3600,
                'allRead|86400-172800':86400,
                'userBook':mapUserBookDate(5),
                'readBook':mapUserBookDate(2),
            }),
            "token":Mo.integer(16)
        }) :
        res.jsonp({
            "err": 1,
            "msg": "登录失败",
        })
});

//模拟注册接口----------------------------------------
server.post(mock+'/reg', (req, res) => {

    let username=req.body.username;
    // console.log('json-server',req.files);// multer  key:value -> body   files-strem -> files|file
    (username && username !== 'hello') ?
        res.jsonp({
            "err": 0,
            "msg": "注册成功",
            "data": Mok({
                '_id|+1':5000,
                "userName": '@ctitle(2,8)',
                "pic": Mock.Random.image('75x75',Mock.Random.color(),Mock.Random.cword(1)),
                "vip|4-1": true,
                "vipTime": '@integer(1597116154371,1597119154371)',
                "money|20-99": 20,
                'todayRead|3600-7200':3600,
                'allRead|86400-172800':86400,
                'userBook':mapUserBookDate(5),
                'readBook':mapUserBookDate(2),
            }),
            "token":Mo.integer(16)
        }) :
        res.jsonp({
            "err": 1,
            "msg": "注册失败",
        })

});

//路由------------------------
const router = jsonServer.router(db);
router.render=(req,res)=>{
    // console.log(res.locals.data);
    let data=res.locals.data;

    let bl=false;
    if (typeof data === 'array'){
        bl = data.length > 0 ? true:false;
    } else if (typeof data === 'object') {
        bl = true;
    }

    setTimeout(()=>{//模拟服务器延时
        res.jsonp({
            err: bl  ? 0 : 1,
            msg: bl ? '成功' : '失败',
            data: data
        })
    },100)
}

server.use(jsonServer.rewriter({//路由自定义别名
    [mock+"/*"]: "/$1",
    "/book/:_id": "/book?_id=:_id",
    "/book\\?_id=:_id": "/book/?_id=:_id",
    "/banner": "/banner"

}));
server.use(router);


server.listen(port,()=>{
    console.log("start");
});