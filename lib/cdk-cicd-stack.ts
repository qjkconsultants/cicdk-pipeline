import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    new CodePipeline(this, 'AwesomePipeline', {
      pipelineName: 'AwsomePipeline',
      synth: new ShellStep('synth', {
        input: CodePipelineSource.gitHub('qjkconsultants/cicdk-pipeline', 'main')
      })
    })
  }
}
