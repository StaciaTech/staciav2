pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout(credentialsId: 'github-pat',
                         scm: git(url: 'https://github.com/StaciaTech/staciav2.git',
                                 branch: env.BRANCH_NAME))
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Building..."'
                npm install
                npm run build
            }
        }
        stage('Deploy') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'release') {
                        sh 'echo "Deploying to S3..."'
                        sh 'aws s3 sync ./build s3://YOUR_S3_BUCKET_NAME'
                        echo "Successfully deployed to S3"
                    } else if (env.BRANCH_NAME == 'main') {
                        sh 'echo "Deploying to cPanel..."'
                        sshPublisher(publishers: [
                            sshPublisherDesc(configName: 'cpanel-scp',
                                             transfers: [
                                                 [
                                                     cleanRemote: false,
                                                     excludes: '',
                                                     flatten: false,
                                                     makeEmptyDirs: false,
                                                     noMoreEntries: false,
                                                     pattern: 'build/**',
                                                     remoteDirectory: '$CPANEL_REMOTE_DIR',
                                                     remoteDirectorySDF: false,
                                                     removePrefix: 'build/',
                                                     sourceFiles: 'build/**/*'
                                                 ]
                                             ],
                                             usePromotion: false,
                                             useWorkspaceInPromotion: false,
                                             verbose: true)
                        ])
                        echo "Successfully deployed to cPanel"
                    } else {
                        echo "No deployment configured for branch: ${env.BRANCH_NAME}"
                    }
                }
            }
        }
    }
    triggers {
        github()
    }
}
