---
sidebar_position: 5
---
# Using AutoML via the SDK

Semantix ML Hub provides a user-friendly SDK (Software Development Kit) that simplifies the process of leveraging our AutoML capabilities. This SDK serves as a convenient wrapper for our backend API, offering you the flexibility and control to run AutoML jobs, manage your job history, and retrieve specific job details with ease.

### Key Features:

1. **Run AutoML Jobs:**
   - The SDK allows you to initiate and execute AutoML jobs effortlessly. You can define your job parameters, including the feature table, target variable, and other essential settings.

2. **List Job History:**
   - Gain visibility into your past AutoML jobs. The SDK enables you to view a list of all the jobs you've executed, providing valuable insights into your workflow.

3. **Retrieve Job Details:**
   - Access specific job details for in-depth analysis. You can retrieve information about a particular job, including its status, results, and configuration.

4. **Retrieve Job outputs:**
   - Retrieve both the trained model and model metadata directly from our storage using specific sdk methods.

### How to Use the SDK:

To utilize the SDK effectively, you can perform the following actions:

1. **Authentication:**
   - Set the `MLHUB_API_KEY` as environment variable, by using:
     - ```os.environ["MLHUB_API_KEY"] = ADD YOUR API KEY HERE```
     - ```%env MLHUB_API_KEY = ADD YOUR API KEY HERE``` (Jupyter notebook)

2. **AutoML SDK Client:**
   - Instantiate our Client by passing the environment that you want to work on.
   ```
         from elemeno_ai_sdk.ml.automl.client import AutoMLClient
         client = AutoMLClient(env=env)
   ```
   - The variable `env` must be `dev` or `prod`.

3. **Run an AutoML Job:**
   - Use the SDK to define the parameters for your AutoML job, including the feature table, target variable, task type (classification or regression), scoring function, and more. The SDK will handle the execution of the job on our platform.
   ```
      result = await client.run_job(
         feature_table_name=FEATURE_TABLE_NAME, 
         features_selected=FEATURES_SELECTED,
         id_column=ID_COLUMN, 
         target_name=TARGET_NAME, 
         start_date=START_DATE, 
         end_date=END_DATE, 
         task=TASK, 
         scoring=SCORING, 
         num_features=NUM_FEATURES, 
         generations=GENERATIONS
      )
   ```
   - The result of this command is just the `id` of the job.
   ```
      {"id":"65395ed4506bc9b4b418f29a"}
   ```


4. **List Job History:**
   - Access a comprehensive list of all the AutoML jobs you've previously executed. This feature provides a historical overview of your modeling efforts. It works by running: 
  ```
      job_list = await client.list_jobs()
  ```
   - The result of the previous command is just a list of all historical jobs with the status and the job params:
   ```
   {'resources': [
      {'id': '652eba92dc623bcd5e5f4cb6',
      'featureTableName': 'feature_table_name_1',
      'generations': 1,
      'idColumn': 'id',
      'status': 'RUNNING',
      'targetName': 'is_over30mob3',
      'startDate': '2022-01-01 00:00:00 +0000 UTC',
      'updatedAt': '2023-10-17 16:47:14.289 +0000 UTC',
      'endDate': '2023-10-13 00:00:00 +0000 UTC',
      'task': 'classification',
      'scoring': 'ks',
      'numFeatures': 4,
      'createdAt': '2023-10-17 16:47:14.289 +0000 UTC'},
   {'id': '652d6c53dc623bcd5e5f4caa',
      'featureTableName': 'feature_table_name_2',
      'generations': 1,
      'idColumn': 'id',
      'status': 'RUNNING',
      'targetName': 'target',
      'startDate': '2022-01-01 00:00:00 +0000 UTC',
      'updatedAt': '2023-10-16 17:01:07.361 +0000 UTC',
      'endDate': '2023-10-13 00:00:00 +0000 UTC',
      'task': 'classification',
      'scoring': 'ks',
      'numFeatures': 2,
      'createdAt': '2023-10-16 17:01:07.361 +0000 UTC'},
   {'id': '652d6bc4dc623bcd5e5f4ca9',
      'featureTableName': 'feature_table_name_3',
      'generations': 1,
      'idColumn': 'id',
      'status': 'FINISHED',
      'targetName': 'is_over30mob3',
      'startDate': '2022-01-01 00:00:00 +0000 UTC',
      'updatedAt': '2023-10-16 16:58:44.222 +0000 UTC',
      'endDate': '2023-10-11 00:00:00 +0000 UTC',
      'task': 'classification',
      'scoring': 'ks',
      'numFeatures': 3,
      'createdAt': '2023-10-16 16:58:44.222 +0000 UTC'}, ...]
   }
   ```

5. **Retrieve Job Details:**
     - Dive deeper into a specific AutoML job by retrieving its details. Just run: 
  ```
   job = await client.get_job(job_id=job_id)
  ```
  Where the `job_id` you get when you run the job using the `run_job` method.
     - The result of this command is all the information of this respective job id, with the current job status and a uri to retrieve the output of the AutoML job like the trained model and it's metadata.
  ```
   {
      'id': '651ec3562e0e8d99b6006597',
      'featureTableName': 'creditcard_demo',
      'generations': 1,
      'idColumn': 'id',
      'status': 'RUNNING',
      'artifactUri': 's3://mlflow/188/f59665c5609d48b9a622bf60c463b377/artifacts',
      'targetName': 'class',
      'startDate': '2023-01-01',
      'endDate': '2023-10-02',
      'task': 'classification',
      'scoring': 'ks',
      'numFeatures': 5
   }
  ```

1. **Retrieve Job outputs:**
   - Acess both the model trained and model metadata using two distinct method from our AutoML client.
   - ** Trained Model: ** This method will download the pickle of the trained model outputed by the job is with this `job_id` with the name `model.pkl`
      ```
         await client.get_model(job_id=job_id)
      ```
      and them you can load it by using the `pickle` library.
      ```
         model = pickle.load(open("./model.pkl", "rb"))
      ```
   - ** Model Metadata: ** The model metadata is a json that contains some informations about the trained model, such as used features, model metrics and parameters of the pipeline steps.
      ```
         response = await client.get_metadata(job_id=job_id)
      ```
      And the response is
      ```
         {
         "features": [
            "v1",
            "v2",
            "v3",
            "v4",
            "v10"
         ],
         "metrics": {
            "accuracy": 0.9753333333333334,
            "balancedAccuracy": 0.9751315955662212,
            "confusionMatrix": {
                  "falseNegatives": 24,
                  "falsePositives": 13,
                  "trueNegatives": 756,
                  "truePositives": 707
            },
            "f1": {
                  "class0": 0.9761136216914138,
                  "class1": 0.974500344589938
            },
            "ks": 0.9502631911324423,
            "precision": {
                  "class0": 0.9692307692307692,
                  "class1": 0.9819444444444444
            },
            "recall": {
                  "class0": 0.9830949284785435,
                  "class1": 0.9671682626538988
            },
            "rocAuc": 0.9751315955662211
         },
         "pipelineSteps": [
            {
                  "name": "polynomialfeatures",
                  "params": {
                     "degree": 2,
                     "includeBias": false,
                     "interactionOnly": false,
                     "order": "C"
                  }
            },
            {
                  "name": "gradientboostingclassifier",
                  "params": {
                     "degree": 0,
                     "includeBias": false,
                     "interactionOnly": false,
                     "order": ""
                  }
            }
         ],
         "target": [
            0,
            1
         ]
      }
      ```

By utilizing the SDK, you streamline your interaction with Semantix ML Hub's AutoML capabilities. It's a powerful tool that empowers you to manage your machine learning tasks efficiently, from job initiation to result analysis.

Whether you're a data scientist looking to automate your model development process or an AI enthusiast exploring the possibilities of AutoML, our SDK simplifies the experience, allowing you to focus on deriving valuable insights from your data.