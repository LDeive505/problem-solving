'''
// =================== PROBLEM DESCRIPTION ===================
Problem Name: Staircase
Problem Link: https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: C(Easy)
// ===========================================================
'''


def staircase(n):
    spaces = n - 1
    
    for i in range(n):
        for j in range(n):
            if j < spaces:
                print(' ', end='')
            else:
                print('#', end='')
        print()
        spaces -= 1
            