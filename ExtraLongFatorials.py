'''
// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: ExtraLongFactorials
Problem Link: https://www.hackerrank.com/challenges/extra-long-factorials/problem
HackerRank Difficulty: Medium
My Difficulty: C (Easy)
*/
// ==========================================================
'''



def extraLongFactorials(n):
    result = n
    for i in range(1,n):
        result *= i
        
    print(result)
    return result