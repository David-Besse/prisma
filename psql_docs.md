# PSQL (CLI)

</br>

## Databases

List databases

```text
\l
```

Create database

```text
CREATE DATABASE database_name;
```

Connect to a specific database

```text
\c database_name
```

</br>

## Tables

List tables

```text
\dt
```

List tables for a specific schema

```text
\dt <name-of-schema>.*
```

Show a specific table

```text
\d TABLE_NAME
```

Show all contents for a given table (you must be connected and have user right access)

```text
SELECT * FROM "table_name";
```

</br>

## Commands list

<https://docs.postgresql.fr/16/app-psql.html>

</br>

---

## Exemples

```text
// connect with postgres account
psql -U postgres
```

```text
// connect with postgres account on a database and pass a SQL request
psql -U postgres -d database_name -c 'SELECT * FROM table_name;'
```

```text
// start the server
pg_ctl start
```

```text
// display server status
pg_ctl status
```

More informations:

<https://docs.postgresql.fr/16/app-pg-ctl.html>
