function solution(n) {
    /*
        var output = n.toString().split('').reverse();
        for(var i=0; i<output.length; i++) {
            output[i]=parseInt(output[i]);
        }
        return output;
    */
   //map: 기존의 배열에 특정 규칙을 적용해 새로운 배열을 만듦
   //return (n+'').split('').reverse().map(v => parseInt(v));

   //숫자풀이
   var arr = [];

   do {
       arr.push(n%10);
       n = Math.floor(n/10);
   } while (n>0)

   return arr;

}