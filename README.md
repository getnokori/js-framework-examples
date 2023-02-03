# lolaDB Frontend Framework Examples

lolaDB works with nearly every frontend framework. Javascript or Typescript.

This repository contains examples for many of today's most popular frontend frameworks.

## Pre-requisites

### Test Data Setup

For this example to work on your local machine as shown in the examples, you must setup a database with an 'orders' table. The table should have the following columns:

- orderId
- productName
- quantity
- customerId

Insert some dummy data. You can use the following SQL statement:

```sql
INSERT INTO (orderId, productName, quantity, customerId) VALUES (3589491, 'NuGrape', 12, 384164);
INSERT INTO (orderId, productName, quantity, customerId) VALUES (3589488, 'Cheerwine', 6, 897788);
INSERT INTO (orderId, productName, quantity, customerId) VALUES (3589490, 'RC Cola', 5, 794576);
INSERT INTO (orderId, productName, quantity, customerId) VALUES (3589489, 'Sunkist', 3, 637786);
```

### Create your query

Within the lolaDB UI, create a `Source` within your `Hub` that connects to your database. Create a `Query` that selects the data you want to display in your frontend application. You can use the following SQL statement:

```sql

SELECT * FROM orders;

```

Save your query and copy the `Query ID` from the top right hand corner to use in your demo app.
