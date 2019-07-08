# Challenges in Micro Frontend (In Progress)

As now so much talk's are going around Micro frontend because of it is more extendable, manageable and also maintain the separation of concern between number of teams working in different par of application but there is so much ambiguity around this topic.

# Challenges in Micro Frontend

1. Let's assume if we have a 2 projects in same repository called old and new projects there are some custom node modules which are common between new and old project we don't wanna install them again and again we can use the method mentioned in code or simply read about NODE_PATH this will give us a flexibility to tell node it did't found the package from default searching also try the path which is provided in NODE_PATH
2. How to manage repetitive dependency
3. Be aware between dependencies and dev dependencies
4. Exclude Global dependencies
5. Use of npm link, if we create every component as a node module we would also like to debug it locally while changing the code in node module and it should automatically reflect in my package ([https://docs.npmjs.com/cli/link](https://docs.npmjs.com/cli/link))
6. .npmignore and npm pack ([https://zellwk.com/blog/ignoring-files-from-npm-package/](https://zellwk.com/blog/ignoring-files-from-npm-package/))
7. npm outdated: list all outdated packages

# How to Use

```
git clone https://github.com/Krishank/micro-frontend-common-challenges.git
cd micro-frontend-common-challenges


npm start

```
