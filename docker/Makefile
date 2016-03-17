default:
	sudo docker build -f ApacheApollo17 -t proj1-apollo ../
	sudo docker build -f KyotoTycoon95 -t proj1-kyoto ../

build-httpd:
	sudo docker build -f ApacheHttpd24 -t proj1-httpd ../

build-apollo:
	sudo docker build -f ApacheApollo17 -t proj1-apollo ../

run:
	sudo docker run proj1-kyoto &
	sudo docker run proj1-apollo &

run-httpd:
	sudo docker run proj1-httpd

run-apollo:
	sudo docker run proj1-apollo

clean:
	sudo docker rm $(sudo docker ps -a -q)
	sudo docker rmi $(sudo docker images -q)

publish-httpd:
	sudo docker tag proj1-httpd mkeen/instawire-httpd
	sudo docker push mkeen/instawire-httpd

publish-apollo:
	sudo docker tag proj1-apollo mkeen/instawire-apollo
	sudo docker push mkeen/instawire-apollo

