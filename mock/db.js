var Mock = require("mockjs");



/*  db返回函数,js返回obj，下方
module.exports = ()=>Mock.mock({
    'book':mapBookDate(200),
    'banner':mapBannerData(20),
    'likeData':maplikeDataData(20),
    'find':mapFindData(50),
    "user":userData(),
});*/



let mapBookDate=(n)=>{
    var data=[];
    for(var i=1; i<=n; i++){
        data.push({
            _id:1000+i,
            bookName:'@ctitle(2,8)',
            auth:'@cname()',
            'classify|1':["言情","文学","语言","玄幻","艺术","武侠","现实","历史","游戏","轻小说","短片",],
            'bookStat|4-1':true,
            'words|3-300':3,
            'price|15-80':15,
            bookDes:'@cparagraph(3)',
            pic:Mock.Random.image('100x120',Mock.Random.color(),Mock.Random.cword(1,2)),
            'readerNum|1-99':1,
            'score|3-4.0-1':4,
            'articleNum|200-2000':200,
            time:'@integer(1189529603220,1589529603220)',
        });
    }
    return data;
}

var mapBannerData=(n)=>{
    let data=[];
    for (let i=1;i<=n; i++){
        data.push({
            _id:2000+i,
            'bookId|1001-1200':1001,
            banner:Mock.Random.image('360x150',Mock.Random.color(),Mock.Random.cword(3,5)),
            title:'@ctitle(2,8)',
            sub_title:'@cparagraph(1)',
        });
    }
    return data;
}

let maplikeDataData=(n)=>{
    let data=[];
    for (let i=1; i<=n; i++){
        data.push({
            _id:3000+i,
            'bookId|1001-1200':1001,
            pic:Mock.Random.image('100x120',Mock.Random.color(),Mock.Random.cword(1,2)),
            bookName:'@ctitle(2,8)',
            recommend:'@cparagraph(1)',
            bookDes:'@cparagraph(3)',
            auth:'@cname()',
        });
    }
    return data;
}

let mapFindData=(n)=>{
    let data=[];
    for (let i=1; i<=n; i++){
        data.push({
            _id:4000+i,
            'bookId|1001-1200':1001,
            pic:Mock.Random.image('100x120',Mock.Random.color(),Mock.Random.cword(1,2)),
            'num|5-20':5,
            bookDes:'@cparagraph(3)',
            'star|600-1999':600,
            'fork|50-599':5,
        });
    }
    return data;
}
let userData=()=>{
    return {
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
    };

}

let mapUserBookDate=(n)=>{
    var data=[];
    for(var i=1; i<=n; i++){
        data.push({
            _id:1000+i,
            bookName:'@ctitle(2,7)',
            auth:'@cname()',
            'classify|1':["言情","文学","语言","玄幻","艺术","武侠","现实","历史","游戏","轻小说","短片",],
            'bookStat|4-1':true,
            'words|3-300':3,
            'price|15-80':15,
            bookDes:'@cparagraph(3)',
            pic:Mock.Random.image('100x120',Mock.Random.color(),Mock.Random.cword(1,2)),
            'readerNum|1-99':1,
            'score|3-4.0-1':4,
            'articleNum|200-2000':200,
            time:'@integer(1189529603220,1589529603220)',
            'readStat|15-80':15,
        });
    }
    return data;
}

//js返回obj
module.exports = Mock.mock({
    'book':mapBookDate(200),
    'banner':mapBannerData(20),
    'likeData':maplikeDataData(20),
    'find':mapFindData(50),
    "user":userData(),
});



/*module.exports = ()=>{
    var data = Mock.mock({

       'book|200':[
           {
               '_id|+1':1000,
               bookName:'@ctitle(2,8)',
               auth:'@cname()',
               'classify|1':[
                   "言情",
                   "文学",
                   "语言",
                   "玄幻",
                   "艺术",
                   "武侠",
                   "现实",
                   "历史",
                   "军事",
                   "游戏",
                   "体育",
                   "轻小说",
                   "短篇",
               ],

           }
       ],

    });
    return data;
}*/