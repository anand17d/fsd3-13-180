#project setup
1. create two folder frontend and backend 
go to frontend `cd frontend`
~type `npm create vite@latest`
~press 'Y' if asked to install
~enter '.' in project name
~select 'react' as framework from arrow key
~'javascript from variant by arrow key
~select ESLint by arrow key
~select yes and press enter
3. aetup talwind in react project
-install talwind by `npm install tailwindcss @tailwindcss/vite`
~open viteconfig.js and add `@talwindcss/postcss` info plugin as below image
![alt text](image-1.png)
~add `import "tailwindcss`;top of the index.css
remove all contents of index.css
`import "tailwindcss`;top of the index.css


in react style can be added in to html by className because class is predefine keyword in react
when js function returns directly html contents , called component
1. start with capital letter
2. it must return html
3. must be close as the calling time 
4. it can be used anywhere anytime
component(react)-user defined 
any web app is built by different components.
it is special type of js function that will return single pr parent html content.
-it may call user defined html tags.
it must call inside angle <> 
-must be closed </>
-the first char must be capital letter
