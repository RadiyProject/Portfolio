up:
	cd docker && docker-compose -f docker-compose.yml up -d --build

up-prod:
	cd docker && docker-compose -f docker-compose.prod.yml up -d --build

down:
	cd docker && docker-compose -f docker-compose.yml down

down-prod:
	cd docker && docker-compose -f docker-compose.prod.yml down

restart:
	make down
	make up

restart-prod:
	make down-prod
	make up-prod