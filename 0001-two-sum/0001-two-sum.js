// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
// Only one valid answer exists in the array.
// Toplamları target olan iki dizi elemanının indexlerini bulma

const nums = [2,7,11,15,1]
const target = 8

// brute force : nested loop : time complexity : O(n**2)
const solution1 = (nums, target) => {
    const length = nums.length;
    for(let i=0; i<length; i++){
        diff = target - nums[i];
        j = i + 1;
        while (j < length) {
            if (nums[j] == diff)
                return([i, j]);
            j += 1;
        }
    }
} 


// hash table holding values: map object, map methods and for loop : time complexity : O(n)
const solution2 = (nums, target) => {
    let map = new Map();
    for(let i=0; i<nums.length; i++){
        const num = nums[i]
        const diff = target - num;
        if(map.has(diff)){
            return [ map.get(diff) , i ];
        } 
        map.set(num, i);
        console.log(map);
    }
    return [];
}

// hash table holding values: dictionary and for loop : time complexity : O(n)
const solution3 = (nums, target) => {
	let map = {};
    for(let i = 0; i < nums.length; i++) {
        let diff = target - nums[i] ;
        if (diff in map) {
            return [map[diff], i];
        }
        map[nums[i]] = i;
        console.log(map);
    }
};

// hash table holding differs: dictionary and for loop with enumarate : time complexity : O(n)
const solution4 = function(nums, target) {
    const map = {};
    for (let [i, num] of nums.entries()) {
        const diff = target - num;
        if(map[num] != null){
            return [ map[num] , i];
        }
        map[diff] = i;
        console.log(map);
    }
};

const result = solution3(nums, target);
console.log(result);
