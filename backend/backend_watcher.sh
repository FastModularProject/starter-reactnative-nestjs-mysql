echo "--  Watching for package*.json changes, to automatically install depedencies --"
nodemon --watch package.json --watch package-lock.json --exec 'npm install --save false' &
echo "--  Starting backend --"
npm run start:dev