# cowsay-in-the-cloud

In this tutorial, you will learn how a very simple application is developed, deployed to the cloud and set up for automatic deployment.

## Preparing your computer

In order to work through this tutorial you will need to take the following preparation steps.

### Install Git

In order to obtain the source code of the application and share your changes you will need the `git` command line tool installed on your computer. You can install it by following [these instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### Install Node.js

In order to run the application you will need Node.js installed on your computer. You can install it from [this site](https://nodejs.org/en/download/).

### Install a good editor

When working with source code and configuration files, a normal text editor like Notepad is too clumsy to work with. Instead, we would like to have an editor which knows the syntax of our programming and configuration languages and can help us when making changes. A good editor to use is [Visual Studio Code](https://code.visualstudio.com/). Maybe you already know another one. Feel free to use it, if it is easier for you!

### Create a user in Github

Our application is stored on Github. Navigate to the [signup page](https://github.com/) to create your Github user. Once you have you user, you need to upload your SSH key by following [these instructions](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Get a copy of the application

Now you are ready to get a copy of the source code of our application. You can do that by creating a suitable work directory somewhere on your computer, changing to that directory and then entering the following command:

```shell
git clone git@github.com:bespinian/cowsay-in-the-cloud.git
```

You should now see a directory `cowsay-in-the-cloud` in your current directory. If you enter that directory you will see all of the code and configuration needed for our little application.

## Run the application locally

In order to run our application we need to first install all of the libraries which the application needs:

```shell
npm install
```

Next we can type the following command to start the application:

```shell
npm start
```

Now that the application is running you can go to the browser and navigate to [http://localhost:3000](http://localhost:3000) to see the output. This is what you should be seeing:

```
 ________________________
< Mooooh from the cloud! >
 ------------------------
        \   ^__^
         \  (oO)\_______
            (__)\       )\/\
             U  ||----w |
                ||     ||
```

## Make some changes

## Bring your application to the cloud

### Get access to the cloud

### Deploy your application

## Push some changes for automatic deployment
