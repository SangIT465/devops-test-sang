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
        TG_TOKEN   = credentials('telegram-token')
        TG_CHAT    = credentials('telegram-chat-id')
    }

    stages {

        stage('Notify Start') {
            steps {
                script {
                    notify("🚀 DEPLOY STARTED\nProject: ${PROJECT}\nBranch: ${BRANCH}")
                }
            }
        }

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
            }
        }
    }

    post {
        success {
            script {
                notify("✅ DEPLOY SUCCESS\nProject: ${PROJECT}\nBranch: ${BRANCH}\nURL: ${SITE_URL}")
            }
        }
        failure {
            script {
                notify("❌ DEPLOY FAILED\nProject: ${PROJECT}\nBranch: ${BRANCH}\nPlease check Jenkins.")
            }
        }
    }
}

def notify(String msg) {
    writeFile file: 'tg_msg.txt', text: msg, encoding: 'UTF-8'
    bat '''
        @echo off
        curl.exe -s -X POST "https://api.telegram.org/bot%TG_TOKEN%/sendMessage" -d chat_id=%TG_CHAT% --data-urlencode text@tg_msg.txt
    '''
}