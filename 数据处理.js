var dic = {
    'a': '张三',
    'b': '李四',
    'c': '王五'
}

var data = [{
    keys: {
        key: [
            'a',
            'b'
        ]
    },
    id: 1
},
{
    keys: {
        key: [
            'b'
        ]
    },
    id: 2
},
{
    keys: {
        key: [
            'c',
            'd'
        ]
    },
    id: 3,
    cccc:'ssss'
}

]


var newData = []

data.forEach(item=>{
    const {keys, ...rest} = item
    let obj = {
        keys:[]
    }
    obj.keys = keys['key'].map(i=>{
       return Object.keys(dic).includes(i)?dic[i]:i
    })
   
    newData.push({
        ...obj,
        ...rest
    })
})
console.log(newData);
