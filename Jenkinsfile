pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    environment {
        PROJECT    = 'devops-test'
        BRANCH     = 'main'
        SITE_URL   = 'http://localhost:8081'
        DEPLOY_DIR = 'C:\\deploy\\devops-test'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy') {
    steps {
        bat '''
            if not exist "%DEPLOY_DIR%" mkdir "%DEPLOY_DIR%"
            copy /Y index.html "%DEPLOY_DIR%\\index.html"
            copy /Y style.css "%DEPLOY_DIR%\\style.css"
            copy /Y script.js "%DEPLOY_DIR%\\script.js"
        '''
        echo "Deployed to ${SITE_URL}"
    }
}
    }

    post {
        success {
            echo 'BUILD SUCCESS'
        }

        failure {
            echo 'BUILD FAILED'
        }
    }
}