pipeline {
    agent any
    environment {
        NODE_VERSION = '16'
    }
    stages {
        checkout scmGit(
            branches: [[name: '*/jenkins']],
             extensions: [], 
             userRemoteConfigs: 
             [[credentialsId: 'b0921c1f-f2bb-4be9-adae-2c638e42305b', url: 'https://github.com/Masoom-Wahid/Clinic-DBMS.git']]
        )
        
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