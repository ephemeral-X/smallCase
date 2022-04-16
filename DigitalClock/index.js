let size = 65;
// 六列数字
let columns = Array.from(document.getElementsByClassName('column'));
const class_list = ['visible', 'near', 'far', 'far', 'distant', 'distant'];

// 获取当前时间
function getClock(){
    let d = new Date();
    let hour = d.getHours();
    hour = hour<10 ? '0'+hour : hour;
    let minute = d.getMinutes();
    minute = minute<10 ? '0'+minute : minute;
    let second = d.getSeconds();
    second = second<10 ? '0'+second : second;

    return hour + '' + minute + '' + second;
}

// 获取对应样式名
function getClass(n, i){
    return class_list.find(function(element, index){
        return i-index===n || i+index===n;
    }) || '';
}

// 定时器
setInterval(()=>{
    let c = getClock();
    columns.forEach(function(element, index){
        let n = parseInt(c[index]);
        let offset = -n*size;   // 偏移量
        element.style.transform = `translateY(calc(50vh + ${offset}px))`;
        // .colums的子元素转为数组遍历
        Array.from(element.children).forEach(function(ele, i){
            let newName = getClass(n, i);
            ele.className = `num ${newName}`;
        })
    })
}, 1000)