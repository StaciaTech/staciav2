pipeline {
  agent any

  environment {
    BUILD_DIR = 'build' // Or 'dist
    CPANEL_HOST = 'staciacorp.com'
    CPANEL_DEST_DIR = '/home2/staciacorp/public_html'
    CPANEL_CRED_ID = 'cpanel-scp'
    AWS_CRED_ID = 'aws-creds'
    S3_BUCKET = 's3://your-bucket-name'
    REGION = 'ap-south-1'
    CI = 'false'
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

    stage('Deploy to cPanel') {
      when {
        branch 'main'
      }
      steps {
        withCredentials([usernamePassword(credentialsId: "${CPANEL_CRED_ID}", usernameVariable: 'SCP_USER', passwordVariable: 'SCP_PASS')]) {
          sh """
            sshpass -p "$SCP_PASS" scp -o StrictHostKeyChecking=no -r ${BUILD_DIR}/* ${SCP_USER}@${CPANEL_HOST}:${CPANEL_DEST_DIR}
          """
        }
      }
    }

    stage('Deploy to S3') {
      when {
        branch 'release'
      }
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', credentialsId: "${AWS_CRED_ID}"]]) {
          sh """
            aws s3 sync ${BUILD_DIR}/ ${S3_BUCKET} --region ${REGION} --delete
          """
        }
      }
    }
  }

  post {
    success {
      echo "✅ Successfully built and deployed ${env.BRANCH_NAME}"
    }
    failure {
      echo "❌ Build or deployment failed for ${env.BRANCH_NAME}"
    }
  }
}
