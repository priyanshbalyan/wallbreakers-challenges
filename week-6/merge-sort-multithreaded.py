import threading

MAX_THREADS = 4

def partition(array, left, right):
	if left >= right:
		return

	mid = left + (right-left)//2

	partition(array, left, mid)
	partition(array, mid+1, right)
	merge(array, left, right)


def merge(array, left, right):
	temp = [None]*len(array)
	for i in range(left, right+1):
		temp[i] = array[i]

	mid = left + (right-left)//2
	left_index = left
	index = left
	right_index = mid+1

	while left_index<=mid and right_index<=right:
		if temp[left_index] <= temp[right_index]:
			array[index] = temp[left_index]
			left_index += 1
		else:
			array[index] = temp[right_index]
			right_index += 1
		index += 1

	while left_index<=mid:
		array[index] = temp[left_index]
		left_index+=1
		index += 1

	while right_index<=right:
		array[index] = temp[right_index]
		right_index += 1
		index += 1


def mergeSort(array, left=0, right=None):
	if right == None:
		right = len(array)-1
	partition(array, left, right)


def getSections(array, part, threadsNum):
	return left, right


def worker(array, part):
	# print(threading.current_thread().getName(), 'Starting')
	left = part * (len(array) // MAX_THREADS)
	right = (part + 1) * (len(array) // MAX_THREADS) -1

	mergeSort(array, left, right)
	# print(threading.current_thread().getName(), 'Exiting')


def mergeSortMultithreaded(array):
	print('Utilising ' + str(MAX_THREADS) + ' threads')
	
	threads = []
	for i in range(MAX_THREADS):
		t = threading.Thread(target=worker, args=(array,i))
		threads.append(t)
		t.start()

	for thread in threads:
		thread.join()

	merge(array, 0, len(array)//2 -1)
	merge(array, len(array)//2, len(array)-1)
	merge(array, 0, len(array)-1)


x = [55, 21, 26, 26, 27, 35, 36, 40, 49, 59, 62, 63, 72, 77, 83, 86, 86, 90, 92, 10]
mergeSortMultithreaded(x)
print(x)