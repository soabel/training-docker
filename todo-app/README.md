# Build image

docker build -t todo-app .

# Publish to Registry

docker tag todo-app:latest 497338553514.dkr.ecr.us-east-1.amazonaws.com/todo-app:latest

docker push 497338553514.dkr.ecr.us-east-1.amazonaws.com/todo-app:latest

# Run aplicacion

docker run -d --name todo-app -p 8080:80 todo-app

# Stop container

docker stop todo-app