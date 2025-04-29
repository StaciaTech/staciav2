pipeline {
    agent any
    environment {
        CI = 'false'
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
                    branch: 'main'
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
        stage('Deploy to cPanel') {
            steps {
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
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
