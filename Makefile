default:
	make -C app
	make -C docker

run: default
	make run -C docker

clean:
	make clean -C app
