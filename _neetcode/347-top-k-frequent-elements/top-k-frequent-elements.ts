function topKFrequent(nums: number[], k: number): number[] {
    let data = new Map<number, number>()
    for (let num of nums) {
        if (!data.has(num)) data.set(num, 1)
        else data.set(num, data.get(num) + 1)
    }
    let sorted = Array.from(data, ([name, value]) => ({ name, value }));
    sorted.sort((a, b) => b.value - a.value);
    let ans = sorted.splice(0, k).map((el) => el.name);
    return ans;
}