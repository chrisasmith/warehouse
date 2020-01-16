pipeline {
        agent { label 'usau-dcbuild05' }
        options {
                disableConcurrentBuilds()
        }
        environment {
                JAVA_HOME="${tool 'jdk8u161'}"
                PATH="${env.JAVA_HOME}/bin:${env.PATH}"
        }
        stages {

                stage('Cleanup old builds') {
                        steps {
                                sh 'rm -rf /root/.ivy2'
                                sh 'rm -rf /root/.sbt'
                        }
                }
                stage('Build') {
                        steps {
                                sh '''
                                        export PATH=/opt/node-v10.16.3-linux-x64/bin:$PATH
                                        echo $PATH
                                        rm -rf node_modules
                                        node --version
                                        npm install --unsafe-perm=true --allow-root
                                        npm run ng build
                                '''
                                fileOperations([fileZipOperation('dist')])
                                
                        }
                }
                stage('Setup Docker image') {
                        steps {
                                sh "docker stop \$(docker ps -a -q) || exit 0"
                                sh "docker image rm my-angular-app || exit 0"
                                sh "docker image build -t my-angular-app ."
                                sh "docker run -d -p 3000:80 --rm my-angular-app"
                        }
                }
        }
        post
        {
                success {
                        archiveArtifacts 'dist.zip'
                }


        }
}


