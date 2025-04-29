pipeline {
    agent any
    environment {
        CI = 'false'
        AWS_ACCESS_KEY_ID = credentials('aws-access-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('aws-secret-access-key')
        S3_BUCKET = 'your-s3-bucket-name'
        AWS_REGION = 'your-aws-region'
        CPANEL_HOST = 'your-cpanel-host'
        CPANEL_USERNAME = 'your-cpanel-username'
        CPANEL_PASSWORD = credentials('cpanel-password')
        CPANEL_REMOTE_DIR = '/public_html/your-remote-directory/'
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
            steps {
                branch([
                    [name: 'release',
                     steps: [
                         script {
                             sh """
                                aws s3 sync build/ s3://$S3_BUCKET/ --delete --region $AWS_REGION --acl public-read
                             """
                         }
                     ]],
                    [name: 'main',
                     steps: [
                        sshPublisher(
                            publishers: [
                                [
                                    configName: 'cpanel-server',
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
    }
    post {
        always {
            cleanWs()
        }
    }
}
