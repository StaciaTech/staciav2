pipeline {
  agent any

  environment {
    BUILD_DIR = 'build'
    CPANEL_HOST = 'staciacorp.com'
    CPANEL_REMOTE_DIR = '/public_html/'
    CPANEL_CRED_ID = 'cpanel-scp'
    AWS_CRED_ID = 'aws-creds'
    S3_BUCKET = 'staciatech.com'
    REGION = 'ap-south-1'
    CI = 'false'
    CPANEL_URL = "http://staciacorp.com"
  }
  
  tools {
        nodejs 'Node-20.11.1'
    }
  
  stages {
    stage('Checkout & Build') {
      when {
        anyOf {
          branch 'main'
          branch 'release'
        }
      }
      steps {
        git branch: "${env.BRANCH_NAME}", url: 'https://github.com/StaciaTech/staciav2.git', credentialsId: 'github-pat'
        sh 'npm install'
        sh 'npm run build'
      }
    }
      stage('Check Build Output') {
          steps {
              script {
                  if (fileExists('dist')) {
                      echo "Detected 'dist' folder, using it for deployment"
                      BUILD_DIR = 'dist'
                  } else if (fileExists('build')) {
                      echo "Detected 'build' folder, using it for deployment"
                      BUILD_DIR = 'build'
                  } else {
                      error "Neither 'build' nor 'dist' folder found!"
                  }
                  echo "BUILD_DIR is set to: ${BUILD_DIR}"
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
                            configName: 'staciacorp',
                            transfers: [
                                [
                                    cleanRemote: false,
                                    excludes: '',
                                    flatten: false,
                                    makeEmptyDirs: false,
                                    noDefaultExcludes: false,
                                    remoteDirectory: CPANEL_REMOTE_DIR,
                                    removePrefix: "${env.BUILD_DIR}/",
                                    sourceFiles: "${env.BUILD_DIR}/**/*"
                                ]
                            ],
                            useWorkspaceInPromotion: false,
                            verbose: true
                        ]
                    ]
                )
            }
      }
        stage('Deploy to S3') {
      when {
        branch 'release'
      }
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: "${AWS_CRED_ID}"]]) {
                    script {
                        echo "Transferring files from ${env.BUILD_DIR} to s3://${env.S3_BUCKET}"
                        sh "aws s3 sync ${env.BUILD_DIR}/ s3://${env.S3_BUCKET}/ --region ${env.REGION} --delete"
                        echo "Successfully transferred files to s3://${env.S3_BUCKET}"
                    }
                }
            }
   }
}

  post {
    success {
        script { 
              echo "✅ Successfully built and deployed ${env.BRANCH_NAME}"
              if (env.BRANCH_NAME == 'main') {
                  echo "cPanel Deployment URL: ${CPANEL_URL}"
              } else if (env.BRANCH_NAME == 'release') {
                  echo "S3 Deployment URL: https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/"
              }
          }
    }
    failure {
      echo "❌ Build or deployment failed for ${env.BRANCH_NAME}"
    }
  }
}
