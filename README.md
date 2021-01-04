# Airtable API Reader

This web library facilitates interaction with the [Airtable API](https://airtable.com/api) by providing simple wrapper functions for reading data.

# Usage

```html
<!DOCTYPE html>
<html>
<head>
    <title>Airtable API Reader (Test)</title>
</head>
<body>
    <!-- Load local firebase-tools library -->
    <script src="src/airtable-api-reader.js"></script>

    <script>
        run();
        async function run() {
            var rows = await airtableApiReader.getRowsCleaned("keyk3fhh9TcJZy6Nk", "appgh7OfqZhb3PQDP", "Markets", "Grid%20view", 10);
            console.dir(rows);
        }
    </script>
</body>
</html>
```