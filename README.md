# flask-app
Simple flask application that will return a simple HTML page

# command lines
-docker build -t docker-flask:v1.0.0 .

-docker images

-docker run -p 5000:5000 --name my-flask docker-flask:v1.0.0

-curl 127.0.0.1:5000

-df -hT

**Modify instance volume to 30GB**

-lsblk

-sudo growpart /dev/xvda 1

-lsblk

-sudo xfs_growfs -d /

-df -hT
