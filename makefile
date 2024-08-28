up:
	cd docker && docker-compose -f docker-compose.yml up -d --build

up-prod:
	cd docker && docker compose -f docker-compose.prod.yml up -d --build

up-stage:
	cd docker && docker compose -f docker-compose.stage.yml up -d --build

down:
	cd docker && docker-compose -f docker-compose.yml down

down-prod:
	cd docker && docker compose -f docker-compose.prod.yml down

down-stage:
	cd docker && docker compose -f docker-compose.stage.yml down

restart:
	make down
	make up

restart-prod:
	make down-prod
	make up-prod

restart-stage:
	make down-stage
	make up-stage