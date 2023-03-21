'''
// =================== PROBLEM DESCRIPTION ===================
Problem Name: Apple and Orange
Problem Link: https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: B(Easy-Medium)
// ===========================================================
'''


def countApplesAndOranges(s, t, a, b, apples, oranges):
    o_count = 0
    a_count = 0
    
    for apple in apples:
        apple += a
        if s <= apple <= t:
            a_count +=1
            
    for orange in oranges:
        orange += b
        if s <= orange <= t:
            o_count +=1
    
    print(a_count, o_count, sep='\n')