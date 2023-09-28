---
sidebar_position: 6
---
# Obtaining Features for Training a Model

In Semantix ML Hub, retrieving features for training your machine learning models is made easy through our SDK method called `get_training_features`. This method provides a straightforward way to obtain the necessary features for your training data. Here's how it works:

### Method Signature:

```python
get_training_features(
    feature_table,
    features_selected=None,
    date_from=None,
    date_to=None,
    only_most_recent=True,
    diff_table=None,
    diff_join_key=None,
    diff_where=None,
    timestamp_column="created_timestamp"
)
```

### Method Parameters:

- `feature_table` (str): The name of the feature view from which you want to retrieve features.

- `features_selected` (list or None): A list of features you want to select. If set to None, all available features will be selected.

- `date_from` (str or None): The start date of the training period. If set to None, the start date of the feature table will be used.

- `date_to` (str or None): The end date of the training period. If set to None, the end date of the feature table will be used.

- `only_most_recent` (bool): If set to True, only the most recent features will be selected. If set to False, all features will be selected.

- `diff_table` (str or None): If not None, the features will be compared with the features in the `diff_table`. The `diff_table` should have a column with the same name as the feature table to enable comparison. This is useful for filtering features at query time.

- `diff_join_key` (str or None): The join key to be used to compare the features when `diff_table` is specified.

- `diff_where` (dict or None): A dictionary with the where clause to be used to compare the features when `diff_table` is specified.

- `timestamp_column` (str): The timestamp column to be used to filter the features. Valid values are "created_timestamp" and "event_timestamp," with the default being "created_timestamp."

### Output:

The `get_training_features` method outputs a pandas DataFrame containing all the selected features. You can use this DataFrame for training your machine learning models with the relevant training data.

By leveraging this SDK method, you can effortlessly obtain the features you need for your model training, making it a convenient and efficient process within Semantix ML Hub.