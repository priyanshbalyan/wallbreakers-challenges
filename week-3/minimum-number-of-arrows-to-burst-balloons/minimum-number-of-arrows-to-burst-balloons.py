class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        if not points or len(points) == 0: return 0
        
        points.sort(key=lambda x: x[0])
        min_end = float('inf')
        count = 0

        for point in points:
            if point[0] > min_end:
                min_end = point[1]
                count += 1
            else:
                min_end = min(min_end, point[1])
            
        return count+1
