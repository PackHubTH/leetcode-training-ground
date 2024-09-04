function productExceptSelf(nums: number[]): number[] {
    let ans = []
    let prefix = 1
    let postfix = 1
    for (let i = 0; i < nums.length; i++) {
        ans.push(prefix)
        prefix *= nums[i]
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] *= postfix
        postfix *= nums[i]
    }
    return ans
}