---
sidebar_position: 3
---
# Training a Classifier Model

In Semantix ML Hub, we offer a comprehensive solution for training classifier models, making it effortless to find the best pipeline for your classification tasks. Our system combines three key components: automatic pipeline selection, feature selection, and model selection, all guided by a scoring function optimized for your project's objectives.

### Key Components:

1. **Automatic Pipeline Selection:**
   - Our platform automatically identifies the best pipeline, which includes data preprocessing steps and the machine learning model, tailored to your classification task.

2. **Auto Feature Selection:**
   - Feature selection is crucial for model performance. We employ Genetic Algorithms to efficiently select the most relevant features based on your specified scoring function and the desired number of features.

3. **Auto Balanced Dataset:**
   - If task is classification type, and to-balance is enabled, the AutoML will balance dataset as: 
      - **Oversample** when minority class that less 1%
      - **Undersample** when minority class between 1% and 20%

4. **Auto Model Selection (TPOT):**
   - We leverage the TPOT package to find the best combination of preprocessing and machine learning models for your classification task. TPOT optimizes these combinations based on the scoring function you define.

5. **Results:**
   - AutoML provides various pieces of information when executed, including several metrics, training and testing datasets, pipeline DAG, and binary of the model.

6. **SDK Integration:**
   - We provide an SDK client that serves as a convenient wrapper for our backend API. This client enables you to run AutoML jobs, list job history, and access specific job details easily.

### Arguments Needed for Running an AutoML Job:

When running an AutoML job for classifier model training, you'll need to provide the following essential arguments:

- `feature_table_name`: The name of the feature table used for feature loading.
- `target_name`: The name of the target variable you want to predict.
- `id_column`: The name of the column containing unique identifiers in your dataframe.
- `features_selected`: A subset of features to select from the feature table.
- `start_date`: The date from which to load the features until the present date.
- `end_date`: The date until which to load the features.
- `task`: Specify that this is a classification task.
- `scoring`: Define the scoring function to use for evaluation. The scoring function may vary depending on your specific classification task.
- `num_features`: Specify the final number of features you want in the model.
- `generations`: The number of runs the Genetic Algorithm will perform before completing the optimization process.
- `to-balance`: If enabled and the task is of a classifier type, AutoML will utilize oversample and undersample methods to balance the dataset.


### Results:

- The JSON result include:
   - List of the features selected
   - Metrics to Train and Test Datasets: Accuracy, Balanced Accuracy, Confusion Matrix, f1, ks, precission, recall and ROC AUC.
      - When multiclass, not calculate ROC AUC and Confusion Matrix
   - Pipeline steps to inference

- PipelineDAG HTML
   - Display the pipeline step in HTML format for visualization.

- Binary Model
   - The binary model file is saved in pickle format.

- Train and Test Datasets.
   - The datasets are in CSV format.


### Benefits:

- **Efficiency:** Automate the entire process of classifier model development, from preprocessing to model selection, saving you time and effort.

- **Customization:** Tailor the feature selection, model selection, and scoring function to meet the unique requirements of your classification task.

- **Performance Optimization:** The system optimizes your pipeline, ensuring that it delivers the best possible results.

- **Objective-Driven:** Create classification models that align with your project's specific goals and metrics.

Semantix ML Hub's AutoML for classifier models streamlines the process of building high-performing models for classification tasks. This integrated solution allows you to focus on extracting valuable insights from your data, knowing that your classification model is optimized for success.