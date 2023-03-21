'''
// =================== PROBLEM DESCRIPTION ===================
Problem Name: Birthday Cake Candles
Problem Link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
HackerRank Difficulty: Easy
My Difficulty: C(Easy)
// ===========================================================
'''



def birthdayCakeCandles(candles):
    candles.sort(reverse=True)
    bigger = candles[0]
    count = 0
    for candle in candles:
        if candle == bigger:
            count += 1
        else:
            break
        
    return count