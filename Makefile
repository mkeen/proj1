default:
	make -C app
	sudo docker build -f docker/ApacheHttpd24 -t proj1 .

run:
	sudo docker run proj1
