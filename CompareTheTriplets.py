'''
// =================== PROBLEM DESCRIPTION ===================
Problem Name: Compare the Triplets
Problem Link: https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: D(Very Easy)
// ===========================================================
'''


def compareTriplets(a, b):
    result = [0,0]
    for i in range(0,3):
        if a[i] > b[i]:
            result[0] += 1
        elif b[i] > a[i]:
            result[1] += 1
    
    return result
    