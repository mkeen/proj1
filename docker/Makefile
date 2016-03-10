default:
	sudo docker build -f ApacheApollo17 -t proj1-apollo ../
	sudo docker build -f ApacheHttpd24 -t proj1-httpd ../
	sudo docker build -f KyotoTycoon95 -t proj1-kyoto ../

run:
	sudo docker run proj1-kyoto &
	sudo docker run proj1-apollo &
	sudo docker run proj1-httpd &

clean:
	sudo docker rm $(sudo docker ps -a -q)
	sudo docker rmi $(sudo docker images -q)
