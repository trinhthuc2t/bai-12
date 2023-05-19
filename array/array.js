/*
let number = [10,20,30,40];


console.log(number.length);

//last element
console.log([number.length-1]);
console.log(number.at(-1));


// - pop-đưa thêm phần tử vào mảng
  number.push('c04');
console.log(number)
*/



// [ 1,9,6,...,23
// 1) tìm mix, max
// 2) tính tổng(tich, chẳn, lẻ ...) phần tử trong mảng
// 3) tìm index của 1 phần tử
// 4) sắp xếp từ bé đến lớn
// 6) Lọc (filter)/ tìm kiếm(find)
// dùng for/if,else
//      built - function.


/*

let number = [1, 7, 3, 16, 5, 8];
let sum = 0;
let count = 0
for (let i = 0; i < number.length; i++ ) {
  if (number[i] % 2 ===0) {
    sum = sum + number[i];
    count = count + 1;
  }
}
console.log(sum/count);
*/
/*

Hàm
1/findIndex() số đầu tiên trong mảng
2/lastIndex() s cuối
3/ filter() lọc các phần tử trong a
4/ map()
5/  - sort()
    - sorted()

*/


let str = "Hello c04";
console.log(str.length); // -> độ dài chuỗi
console.log(str[4]);       // -> phần tử thứ 4
console.log(str.at(4)); //-> phần tử thứ 4
console.log(str[-1]);     // undefined
console.log(str.at(-1));  // ->phần tử số [str.leng-1]
console.log(str.at(-3));// ->phần tử số [str.leng-3]

//không thay đổi được

str[0] = 'z';
console.log(str);


// splip
let split = str.split(' ');//tách chuỗi tại space
console.log(split);

let split1 = str.split(''); //tách chuỗi tại mỗi kí tự
console.log(split1);

let split2 = str.split(); //tách chuỗi tại mỗi kí tự
console.log(split2);

let join1 = split1.join('-');  // Nối bằng phím -
console.log(join1);

let join2 = split1.join('');  // Nối liền
console.log(join2);


// indexOf
console.log(str.indexOf('l')); // gọi vị trí l
console.log(str.lastIndexOf('l'));   // gọi vị trí sau l
console.log(str.lastIndexOf('llo')); // gọi vị trí l
console.log(str.lastIndexOf('lloz')); // k cos z nên trả về -1
console.log(str.lastIndexOf('Llo')); // k có L nên trả ề - 1


//đổi chuỗi thường thành in hoa, thường
console.log(str.toUpperCase()); // ->in hoa
console.log(str.toLowerCase()); // ->thường
console.log(str);


console.log(str.includes('04')); //có '04' ở trong str không. có nên true
console.log(str.includes('05')); // k có '05' trong str nên trả về false


//Cắt


let slice = str.slice();
console.log(slice);


let slice2 = str.slice(0,5);
console.log(slice2);


console.log(str.slice(2,5));


