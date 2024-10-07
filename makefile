up:
	cd docker && docker-compose -f docker-compose.yml up -d --build

build-prod:
	cd docker && docker compose -f docker-compose.prod.yml build


up-prod:
	cd docker && docker run -d --expose 3000 --name portfolio_react_front portfolio_react_front_image

up-stage:
	cd docker && docker compose -f docker-compose.stage.yml up -d --build

down:
	cd docker && docker-compose -f docker-compose.yml down

down-prod:
	cd docker && docker remove --force portfolio_react_front

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