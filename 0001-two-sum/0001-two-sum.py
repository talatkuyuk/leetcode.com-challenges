# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. 
# Only one valid answer exists in the array.
# Toplamları target olan iki dizi elemanının indexlerini bulma

nums = [2,7,11,15]
target = 9

# brute force : nested loop : time complexity : O(n**2)
def solution1 (nums, target): 
    length = len(nums)
    for i in range(length):
        diff = target - nums[i]
        j = i + 1
        while j < length:
            # print (nums[i] + nums[j])
            if (nums[j] == diff):
                return([i, j])
            j += 1

# hash table: dictionary and for loop in range : time complexity : O(n)
def solution2 (nums, target): 
    hashTable = {}
    length = len(nums)
    for i in range(length):
        diff = target - nums[i]
        if diff in hashTable:
            return [hashTable[diff], i]
        else:
            hashTable[nums[i]] = i

# hash table: dictionary and for loop with enumarate : time complexity : O(n)
def solution3 (nums, target): 
    hashTable = {}
    for index, value in enumerate(nums):
        diff = target - value
        if diff in hashTable:
            return [hashTable[diff], index]
        else:
            hashTable[nums[index]] = index

indexes = solution1(nums, target)
print (indexes)

indexes = solution2(nums, target)
print (indexes)   

indexes = solution3(nums, target)
print (indexes) 
    