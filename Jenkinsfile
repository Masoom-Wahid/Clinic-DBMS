pipeline {
    agent any
    environment {
        NODE_VERSION = '16'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'jenkins', url: 'https://github.com/Masoom-Wahid/Clinic-DBMS/tree/jenkins'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'sleep 10'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
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