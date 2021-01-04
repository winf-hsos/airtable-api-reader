/* Tools to facilitate interaction with Airtable API */

console.log("Airtable API Reader V0.1");

var airtableApiReader = (function () {

    var baseUrl = "https://api.airtable.com/v0/";

    var getRowsRaw = function (apiKey, baseId, tableName, viewName, maxRecords = 100) {

        let url = _buildUrl(apiKey, baseId, tableName, viewName, maxRecords);

        return new Promise((resolve, reject) => fetch(url)
            .then(response => response.json())
            .then(data => {
                resolve(data);
            }))
    }

    var getRowsCleaned = function (apiKey, baseId, tableName, viewName, maxRecords = 100) {

        return getRowsRaw(apiKey, baseId, tableName, viewName, maxRecords)
            .then(rawData => {

                let cleanRows = [];
                for (var i = 0; i < rawData.records.length; i++) {
                    let row = {}
                    row.id = rawData.records[i].id;
                    row.createdTime = rawData.records[i].createdTime;

                    for (const [key, value] of Object.entries(rawData.records[i].fields)) {
                        row[key] = value;
                    }
                    cleanRows.push(row);
                }
                return cleanRows;
            });
    }

    function _buildUrl(apiKey, baseId, tableName, viewName, maxRecords = 100) {
        return baseUrl + baseId + "/" + tableName
            + "?maxRecords=" + maxRecords
            + "&view=" + viewName
            + "&api_key=" + apiKey;
    }

    return {
        getRowsRaw: getRowsRaw,
        getRowsCleaned: getRowsCleaned
    }
})();