The infrastucture will be hosted on AWS.
There is two way to create an infracture for your starter : 
- either manually
- either using Terraform that will automate everything for you

In both scenarios we will first create an infrastructure (manually or with Terraform), and then use Github Actions to deploy our app.

### Manual creation of the infrastructure and deployments ###

We will create the AWS infrastructure manually and it will contain : 
- an ElasticBeanStack (EBS) for the backend
- an Amazon Relational Database (RDS)
- an S3 bucket and CloudFront for the frontend

**Step 1 : create the EBS for an auto scalable backend** <br/>

Documentation [here](https://blog.fast-modular-project.com/deployment-aws-elastic-beanstalk).

**Step 2 : create the RDS database** <br/>

Documentation [here](https://blog.fast-modular-project.com/deployment-aws-rds).

**Step 3 : create the S3 bucket and se CloudFront CDN to serve it** <br/>

Documentation [here](https://blog.fast-modular-project.com/deployment-aws-s3-cloudfront).

### Automatic creation of the infrastructure with [Terraform](https://www.terraform.io) and deployments ###
Coming soon...