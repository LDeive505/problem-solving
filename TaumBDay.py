'''
// =================== PROBLEM DESCRIPTION ===================
Problem Name: Taum and B'day
Problem Link: https://www.hackerrank.com/challenges/taum-and-bday/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: D(Very Easy)
// ===========================================================
'''


def taumBday(b, w, bc, wc, z):
    bCost = min(bc, wc+z);
    wCost = min(wc, bc+z);
    
    return (b*bCost) + (w*wCost);