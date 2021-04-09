# Docker command to run this ReactJS docker set-up

### First, build this image
`docker build -t movie-listing .`

### Run this image
`docker run -p 8080:80/tcp -d movie-listing`

Check: `http://localhost:8080/`