const nums = [2,7,11,15]
var twoSum = (nums, target) =>{
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
}

var twoSome = (nums, target) =>{
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i]
        if(map.has(complement)){
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
}


const a = 5

if(a <= 10){
    console.log('a is greater than 10');
}else{
    console.log('a is less than or equal to 10');
}

console.log(twoSum(nums, 18))
console.log(twoSome(nums,26));
 