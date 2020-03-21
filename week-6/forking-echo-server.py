import os
import sys
import socket

acceptor = socket.socket()
acceptor.bind(('localhost', 4242))
acceptor.listen(10)

for i in range(3):
	pid = os.fork()

	if pid == 0:
		childpid = os.getpid()
		print("Child %s listening on localhost:4242" % childpid)
		try:
			while True:
				conn, addr = acceptor.accept()
				flo = conn.makefile()
				flo.write('Child %s echo> ' % childpid)
				flo.flush()
				message = flo.readline()
				flo.write(message)
				conn.close()
				print("child %s echo'd: %r" % (childpid, message.strip()))
		except KeyboardInterrupt:
			sys.exit()

try:
	os.waitpid(-1,0)
except KeyboardInterrupt:
	print('bailing')
	sys.exit()