exports.add = function(a,b) {
   if(isNaN(a) || isNaN(b)) {
       return -1;
   }else {
       return Number(a) + Number(b);
   }
};