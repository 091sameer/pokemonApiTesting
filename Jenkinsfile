pipeline {

    agent any

//we can select when to run tests automatically using this feature
//triggers { cron('* * * * *') }

environment {
        CI = 'true' 
    }

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  stages {
     stage("Initialize") {
       steps {
         sh 'node --version'
         sh 'npm install'
       }
     }

   stage("Test") {
       steps {
         script {           
              try {
                    sh "./run_tests.sh"
                    echo "SUCCESS : The Pokemon GUI tests PASSED!!"
                  } 
              catch (ex)
                  {
                    echo "FAILURE : The Pokemon GUI tests FAILED!! Please check"
                    currentBuild.result = 'FAILURE'
                  }
              }
       }
     }
  }
}
  