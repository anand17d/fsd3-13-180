localhost-URL
127.0.0.1-ip address

control+c for stop the server

npm = node package manager
used to install ,run ,uninstall,any program and package
-npm install <packagename>
-npm uninstall <packagename>

to use npm , the project must  npm projact
to create npm project we can use
-npm init -y

it creates a package .json holds all the information related to install package from npm

it also creates a folder node_modules automatically
node_modules holds the package/library files
-generally we ignore the node_modules by .gitgnore

nodemon-it restart the server automatically when file changes
npm i nodemon -D
note: -D flag will install this
package as developer dependency
-to execute any program,update the package.json file then start the server 

start-it will execute the app on deployment
dev-it will start server in devlopment phase (only for developer)
res: it will return contents (json/html/plain) to the user/client 
req:it will retrive the information from client to the server
server send also statuscodes to the client,that indicates the error/success message
# status codes 
-200-ok
-201-created
400-unauthorized
403-forbidden
404-not found
500-internal server error
##content type
text/plain
text/html
application/json
text/css
the content type and status code can be send back to client by two ways
1.res.writehead
2.res.setheader
3.res.statusCode