pipeline {
    agent any

    triggers {
        githubPush()
    }
    environment {
        CPANEL_REMOTE_DIR = '/public_html/'
        CI = 'false'
    }
    tools {
        nodejs 'Node-20.11.1'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Get Current Branch') {
            steps {
                script {
                    env.BRANCH_NAME = sh(script: 'git rev-parse --abbrev-ref HEAD', returnStdout: true).trim()
                    echo "Current branch is: ${env.BRANCH_NAME}"
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Determine Build Output') {
            steps {
                script {
                    if (fileExists('build')) {
                        env.BUILD_OUTPUT_DIR = 'build'
                        echo "Build output directory found: build"
                    } else if (fileExists('dist')) {
                        env.BUILD_OUTPUT_DIR = 'dist'
                        echo "Build output directory found: dist"
                    } else {
                        error "Neither 'build' nor 'dist' directory found after build!"
                    }
                }
            }
        }
        stage('Deploy to S3') {
            when {
                environment name: 'BRANCH_NAME', value: 'release'
            }
            steps {
                script {
                    def awsRegion = 'ap-south-1' // e.g., 'ap-south-1'
                    def s3BucketName = 'staciatech.com'

                    sh "aws s3 sync ${env.BUILD_OUTPUT_DIR}/* s3://${s3BucketName} --region ${awsRegion}"
                    echo "Successfully deployed to S3://${s3BucketName}"
                }
            }
        }
        stage('Deploy to cPanel') {
            when {
                environment name: 'BRANCH_NAME', value: 'main'
            }
            steps {
                sshPublisher(
                    publishers: [
                        [
                            configName: 'cpanel-scp', // The name you'll configure in Jenkins Global Tool Configuration
                            transfers: [
                                [
                                    cleanRemote: false,
                                    excludes: '',
                                    flatten: false,
                                    makeEmptyDirs: false,
                                    noDefaultExcludes: false,
                                    remoteDirectory: CPANEL_REMOTE_DIR,
                                    removePrefix: "${env.BUILD_OUTPUT_DIR}/", // Remove the build or dist prefix
                                    sourceFiles: "${env.BUILD_OUTPUT_DIR}/**/*"
                                ]
                            ],
                            useWorkspaceInPromotion: false,
                            verbose: true
                        ]
                    ]
                )
            }
        }
    }
}
