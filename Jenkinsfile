pipeline {
    agent any
    environment {
        NODE_VERSION = '16'
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    // Notify GitHub that the build is pending
                    githubNotify context: 'Jenkins/Checkout', 
                                  description: 'Checking out code...', 
                                  status: 'PENDING'
                }
                git branch: 'jenkins', url: 'https://github.com/Masoom-Wahid/Clinic-DBMS.git'
                script {
                    // Notify GitHub that the checkout is complete
                    githubNotify context: 'Jenkins/Checkout', 
                                  description: 'Code checked out successfully.', 
                                  status: 'SUCCESS'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    githubNotify context: 'Jenkins/Install-Dependencies', 
                                  description: 'Installing dependencies...', 
                                  status: 'PENDING'
                }
                sh 'npm install'
                script {
                    githubNotify context: 'Jenkins/Install-Dependencies', 
                                  description: 'Dependencies installed successfully.', 
                                  status: 'SUCCESS'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    githubNotify context: 'Jenkins/Run-Tests', 
                                  description: 'Running tests...', 
                                  status: 'PENDING'
                }
                sh 'sleep 10' // Replace with actual test commands
                script {
                    githubNotify context: 'Jenkins/Run-Tests', 
                                  description: 'Tests completed successfully.', 
                                  status: 'SUCCESS'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    githubNotify context: 'Jenkins/Build', 
                                  description: 'Building application...', 
                                  status: 'PENDING'
                }
                sh 'npm run build' // Replace with actual build commands
                script {
                    githubNotify context: 'Jenkins/Build', 
                                  description: 'Application built successfully.', 
                                  status: 'SUCCESS'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    githubNotify context: 'Jenkins/Deploy', 
                                  description: 'Deploying application...', 
                                  status: 'PENDING'
                }
                sh 'sleep 20' // Replace with actual deployment commands
                echo 'Deploying application...'
                script {
                    githubNotify context: 'Jenkins/Deploy', 
                                  description: 'Application deployed successfully.', 
                                  status: 'SUCCESS'
                }
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
            script {
                githubNotify context: 'Jenkins/Pipeline', 
                              description: 'Pipeline completed successfully.', 
                              status: 'SUCCESS'
            }
        }
        failure {
            echo 'Pipeline failed.'
            script {
                githubNotify context: 'Jenkins/Pipeline', 
                              description: 'Pipeline failed.', 
                              status: 'FAILURE'
            }
        }
    }
}