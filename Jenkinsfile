pipeline {
    agent any
     
    triggers {
        githubPush()
    }
    environment {
        CPANEL_REMOTE_DIR = '/path/to/your/cpanel/webroot/' // Define your cPanel remote directory here
    }
    tools {
        nodejs 'Node-20.11.1' // Replace 'nodejs18' with the name you configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install' // Or 'yarn install' if you use Yarn
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build' // Or 'yarn build' - adjust your build script
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
                    def awsRegion = 'your-aws-region' // e.g., 'ap-south-1'
                    def s3BucketName = 'your-s3-bucket-name'

                    sh "aws s3 sync ${env.BUILD_OUTPUT_DIR}/* s3://${s3BucketName} --delete --region ${awsRegion}"
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
                            configName: 'cpanel-server', // The name you'll configure in Jenkins Global Tool Configuration
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
