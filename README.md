Setup docker:
docker build -t flyra-website-image .

Run docker:
docker run --rm -p 3000:3000 --name flyra-website-container flyra-website-image