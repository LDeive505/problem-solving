'''
// =================== PROBLEM DESCRIPTION ===================
Problem Name: Camel Case
Problem Link: https://www.hackerrank.com/challenges/camelcase/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: C(Easy)
// ===========================================================
'''


def camelcase(s):
    count = 1
    for char in s:
        if char.isupper():
            count+=1
    
    return count