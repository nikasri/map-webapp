pipeline {
    agent any

    stages {
        stage('Build'){
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){
            steps {
                sh "chmod +x -R ${env.map-webapp}"
                sh './jenkins/scripts/test.sh'
            }
        }
    }
}
