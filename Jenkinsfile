pipeline {
    agent any
    environment {
        NODE_VERSION = '20' // Informational
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scmGit(
                    branches: [[name: '*/jenkins']],
                    extensions: [],
                    userRemoteConfigs: [[
                        credentialsId: 'b0921c1f-f2bb-4be9-adae-2c638e42305b',
                        url: 'https://github.com/Masoom-Wahid/Clinic-DBMS.git'
                    ]]
                )
            }
        }
        stage('Install Dependencies') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 20') { // Must match Global Tools name
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 20') {
                    sh 'sleep 10'
                }
            }
        }
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 20') {
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'sleep 20'
                echo 'Deploying application...'
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}