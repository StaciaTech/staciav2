pipeline {
    agent any
    environment {
        CI = 'false'
        // AWS Credentials for S3 Deployment
        AWS_ACCESS_KEY_ID = credentials('aws-creds')
        AWS_SECRET_ACCESS_KEY = credentials('awscreds')
        S3_BUCKET = 'staciatech.com'
        AWS_REGION = 'ap-south-1'

        // cPanel Connection Details for main branch Deployment
        CPANEL_HOST = 'staciacorp.com'
        CPANEL_USERNAME = 'staciacorp'
        CPANEL_PASSWORD = credentials('cpanel-scp')
        CPANEL_REMOTE_DIR = '/public_html/'
    }
    tools {
        nodejs 'Node-20.11.1'
    }
    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'github_pat',
                    url: 'https://github.com/StaciaTech/staciav2.git',
                    branch: "${env.BRANCH_NAME}"
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Archive Artifacts') {
            steps {
                archiveArtifacts 'build/**/*'
            }
        }
        stage('Deploy') {
            branch([
                [name: 'release',
                 steps: [
                     script {
                         sh """
                            aws s3 sync build/ s3://$S3_BUCKET/ --region $AWS_REGION
                         """
                     }
                 ]],
                [name: 'main',
                 steps: [
                    sshPublisher(
                        publishers: [
                            [
                                configName: 'staciacorp',
                                transfers: [
                                    [
                                        cleanRemote: false,
                                        excludes: '',
                                        flatten: false,
                                        makeEmptyDirs: false,
                                        noDefaultExcludes: false,
                                        remoteDirectory: CPANEL_REMOTE_DIR,
                                        remoteDirectorySDF: false,
                                        removePrefix: 'build/',
                                        sourceFiles: 'build/**/*'
                                    ]
                                ],
                                useWorkspaceInPromotion: false,
                                verbose: true
                            ]
                        ]
                    )
                 ]],
                [name: 'feature/*',
                 steps: [
                     script: {
                         echo "Feature branches are not deployed."
                     }
                 ]
                 ]
            ])
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
