'''
// =================== PROBLEM DESCRIPTION ===================
Problem Name: Mini-Max Sum
Problem Link: https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: D(Very Easy)
// ===========================================================
'''



def miniMaxSum(arr):
    arr.sort()
    a = sum(arr[:4])
    b = sum(arr[1:])
    print(f'{a} {b}')