# Pokemon API Automation

This repository contains the implementation of the automation tests for the Pokemon API Testing. 

# SHELL FILE
To run the tests from a single shell file from the command line locally, please run the below command from your Terminal. This runs the tests using Electron browser in a headless fashion.
$ sh run-tests.sh

# NPM RUN
If you want to run the tests from command line using npm, we have 2 options
1. npm run open_gui 
This is used to open cypress visually and then select the feature/spec file which needs to be tested. We can also choose which browser we wish to run the tests on.

2. npm run test
This runs the all the tests on Electron Browser in a headless mode and prints the results in commandline. This is the same thing being executed in the above Shell file.

# JENKINS RUN
We have the Jenkinsfile which contains the definition of the pipeline and also its steps for performing the GUI tests. The prerequisite for running this test in Jenkins is to have the "Node" plugin in Jenkins.

# FUTURE STEPS
Also we can use Docker to run the tests which again then requires us to have the Docker plugin in Jenkins. We can configure the Docker command in future if required.

# Thoughts on how the environment must be setup and configured in order to execute the tests properly.

Usually before deploying the code into the production, the best way is to test the code in multiple environment stages. We need to have 4 stages(at least 3) - Dev, Stage, QA and Prod. Once the developers checkin the code in the source control like GIT, we test the product on Dev environment. If it contains any failures, they are fixed until everything passes. Then we repeat the same process on the next Stage environment, followed by QA and then if all tests pass on the QA, we test and release it on Prod if there are no failures.

Usually in Agile methodology, we perform the tests after every new checkin of the code from developers. Also we need to have Daily / Nightly builds to perform the tests on different environments and gauge their status. If something fails, we need to be notified and fix them as soon as possible (depending on the severity and priority).

Also its better to have the environment parameters in a single different file for each environment. 
eg: DEV -- dev.json, QA -- qa.json for different environments. 
Here the "dev.json" file contains all the environment parameters for the dev environment. 

We could then load the parameters from the env files according to the environment on which the tests are performed and then execute the tests. It should be easily possible to select the environment and their respective files to be configured from the command line.

The best strategy is to use Docker files for creating containers and performing tests. This helps in isolating the tests and also helps in providing the same environment for any user irrespective of the Operating System being used.
