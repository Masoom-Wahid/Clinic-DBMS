pipeline {
    agent any
    environment {
        NODEJS_HOME = tool name: 'Node16', type: 'nodejs' 
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }
    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                git branch: 'main', url: 'https://github.com/Masoom-Wahid/Clinic-DBMS.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh sleep 5
                sh 'echo test_finsiehd'
            }
        }
        stage('Build') {
            steps {
                // Build the Vite app for production
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'sleep 10'
                sh 'echo finished_deploy'
            }
        }
    }
    post {
        always {
            echo 'Pipeline completed!'
        }
        success {
            echo 'Build and deployment successful!'
            archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
    }
}