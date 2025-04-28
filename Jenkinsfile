pipeline {
    agent any
    environment {
        CI = 'false'
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
                            remoteDirectory: '/public_html/',
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
}
