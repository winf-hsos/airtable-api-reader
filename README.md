# Airtable API Reader

This web library facilitates interaction with the [Airtable API](https://airtable.com/api) by providing simple wrapper functions for reading data.

# Load from CDN

`<script scr="https://cdn.jsdelivr.net/gh/winf-hsos/airtable-api-reader/src/airtable-api-reader.min.js"></script>`

# Usage

```html
<!DOCTYPE html>
<html>
<head>
    <title>Airtable API Reader (Test)</title>
</head>
<body>
    <!-- Load local library -->
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