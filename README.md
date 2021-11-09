# cowsay-in-the-cloud

In this tutorial, you will learn how a very simple application is developed, deployed to the cloud and set up for automatic deployment.

## Preparing your computer

In order to work through this tutorial you will need to take the following preparation steps.

### Install Git

In order to obtain the source code of the application and share your changes you will need the `git` command line tool installed on your computer. You can install it by following [these instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

### Install Node.js

In order to run the application you will need Node.js installed on your computer. You can install it from [this site](https://nodejs.org/en/download/).

### Install `serverless`

For deploying the application to the cloud we will use the `serverless` tool. You can install it by typing:

```shell
npm install -g serverless
```

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

You can now try to make some changes to the application. For this purpose, you can edit the file `cowsay.js`. Try changing the message which the cow says. You can even change the way the cow looks or select an entirely different animal. Have a look at [the documentation](https://www.npmjs.com/package/cowsay) on how to do this.

## Bring your application to the cloud

Until now you have executed the application on your own machine. This is great for trying things out when you are making changes. Now, let's have a look how you would deploy the same application the cloud, make it available for others to use and ensure that it will keep working even if thousands of users were to use it at the same time.

### Get access to the cloud

We will use the `serverless` tool to deploy the application in the cloud. In order for this tool to be able to access the cloud, you need to create some access credential for it. Use the following steps to achieve this:

1. Navigate to [https://aws.amazon.com/console/](https://aws.amazon.com/console/) in the browser.
2. Press on the Sign In button.
3. Enter the access credentials you received from your tutor.
4. Click on your user name in the top right of the screen and then on `My Security Credentials`.
5. Press the button `Create access key` and download the CSV file.
6. Go to the shell an set the environment variable `AWS_ACCESS_KEY_ID` to the access key ID.
7. Set the environment variable `AWS_SECRET_ACCESS_KEY` to the secret key.
8. Set the environment variable `AWS_REGION` to `eu-central-1`.

Your environment is now set up.

### Deploy your application

You can now deploy your version of the application with the following command:

```shell
serverless deploy --stage dev-<your name>
```

This will set up a new instance of the application named after you. You can also delete your application from the cloud by typing:

```shell
serverless remove --stage dev-<your name>
```

## Push some changes for automatic deployment

We do not want to keep repeating these steps manually every time we have a new version of our application, so there is a pipeline set up in the GitHub repo of the application. When you are ready you can push your change to the repo's `main` branch and watch the pipeline re-deploy the application. First check your changes:

```shell
git status
git diff
```

If you are satisfied, stage your changes:

```shell
git add .
```

The commit them:

```shell
git commit
```

Then push them to the repo on GitHub:

```shell
git push
```

If you navigate to the `actions` tab in GitHub you can see that the pipeline starts running and re-deploys the application with the changes you have just pushed.

Congratulations!
