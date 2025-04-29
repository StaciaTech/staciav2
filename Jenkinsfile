pipeline {
    agent any

    environment {
        CPANEL_REMOTE_DIR = '/public_html/'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
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
                branch 'release'
            }
            steps {
                script {
                    def awsRegion = 'ap-south-1'
                    def s3BucketName = 'staciatech.com'

                    sh "aws s3 sync ${env.BUILD_OUTPUT_DIR}/* s3://${s3BucketName} --region ${awsRegion}"
                    echo "Successfully deployed to S3://${s3BucketName}"
                }
            }
        }
        stage('Deploy to cPanel') {
            when {
                branch 'main'
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
   triggers {
    githubPush(branchFilter: 'release|main')
    githubPullRequests(
        branchFilter: 'release|main',
        eventTypes: ['opened', 'synchronize', 'reopened', 'closed']
    )
}
}
