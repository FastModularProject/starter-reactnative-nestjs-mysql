**Step 1 : get the code** <br/>
git clone  

**Step 2 : prepare your environment** <br/>
[Install Docker](https://docs.docker.com/get-docker/) on your machine.

**Step 3 : Launch docker** <br/>
At the end of the installation, don't forget to launch docker.<br/>
When the whale icon in the status bar stays steady, Docker Desktop is up-and-running, and is accessible from any terminal window.

**Step 4 : launch the backend** <br/>
```docker-compose up```

Backend is launched at ``` http://localhost:3000/api ``` <br/>
Database is launched at ```http://localhost:3306```

**Step 5 : setup your React Native env** <br/>

https://reactnative.dev/docs/environment-setup

**Step 6 : Plug your device** <br/>
https://reactnative.dev/docs/running-on-device

**Step 8 : Launch the app** <br/>
```npx react-native run-android```

**Install packages** <br/>
If you want to install a package with npm, you can npm install it locally. <br>
A watcher in the container is waiting for changes in your package.json and package-lock.json to replicate the installation you have done locally. <br/>
<br/>
If you are facing any issue, you can delete anoynmous container and force a rebuilt of your containers using : <br/>
`docker-compose up -V --build`

**Logs** <br/>
If you want to ease your usage of Docker containers, you can download [Docker Desktop](https://www.docker.com/products/docker-desktop ) <br/>

**Clean your docker** <br/>
``` docker rm -f $(docker ps -a -q) ``` <br/>
``` docker system prune -a -f --volumes ```