pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checkout source code'
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
                echo 'Deploy website'
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