[![Build Status](https://img.shields.io/travis/scriptotek/php-sru-client.svg)](https://travis-ci.org/scriptotek/php-sru-client)
[![Coverage Status](https://img.shields.io/coveralls/scriptotek/php-sru-client.svg)](https://coveralls.io/r/scriptotek/php-sru-client?branch=master)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/scriptotek/php-sru-client/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/scriptotek/php-sru-client/?branch=master)

## php-sru-client

Simple PHP package for making [Search/Retrieve via URL](http://www.loc.gov/standards/sru/) (SRU) requests, using the 
[Guzzle HTTP client](http://guzzlephp.org/)
and returning 
[QuiteSimpleXMLElement](//github.com/danmichaelo/quitesimplexmlelement) instances. Includes an iterator to easily iterate over search results, abstracting away the process of making multiple requests.

If you prefer a simple text response, you might have a look at
the [php-sru-search](https://github.com/Zeitschriftendatenbank/php-sru-search) package.

### Install using Composer

Add the package to the `require` list of your `composer.json` file.

```json
{
    "require": {
        "scriptotek/sru-client": "dev-master"
    },
}
``` 

and run `composer install` to get the latest version of the package.

### Example

```php
require_once('vendor/autoload.php');
use Scriptotek\Sru\Client as SruClient;

$url = 'http://sru.bibsys.no/search/biblioholdings';

$client = new SruClient($url, array(
    'schema' => 'marcxml',
    'version' => '1.1',
    'user-agent' => 'MyTool/0.1'
));
```

To iterate over all the results from a `searchRetrieve` query, use the [Records](//scriptotek.github.io/php-sru-client/api_docs/Scriptotek/Sru/Records.html) class returned from `Client::records()`. The first argument is
the CQL query, and the second optional argument is the number of records to fetch for each request (defaults to 10).

```php
$records = $client->records('dc.title="Hello world"');
if ($records->error) {
	print 'ERROR: ' . $records->error . "\n";
}
foreach ($records as $record) {
	echo "Got record " . $record->position . " of " . $records->numberOfRecords() . "\n";
	// processRecord($record->data);
}
```

Use explain to get information about servers:

```php
$urls = array(
    'http://sru.bibsys.no/search/biblio',
    'http://lx2.loc.gov:210/LCDB',
    'http://services.d-nb.de/sru/zdb',
    'http://api.libris.kb.se/sru/libris',
);

foreach ($urls as $url) {

    $client = new SruClient($url, array(
        'version' => '1.1',
        'user-agent' => 'MyTool/0.1'
    ));

    $response = $client->explain();

    if ($response->error) {
        print 'ERROR: ' . $response->error . "\n";
        continue;
    }

    printf("Host: %s:%d\n", $response->host, $response->port);
    printf("  Database: %s\n", $response->database->identifier);
    printf("  %s\n", $response->database->title);
    printf("  %s\n", $response->database->description);
    print "  Indexes:\n";
    foreach ($response->indexes as $idx) {
        printf("   - %s: %s\n", $idx->title, implode(' / ', $idx->maps));
    }

}
```

### API documentation 

API documentation can be generated using e.g. [Sami](https://github.com/fabpot/sami),
which is included in the dev requirements of `composer.json`.

    php vendor/bin/sami.php update sami.config.php -v

You can view it at [scriptotek.github.io/php-sru-client](//scriptotek.github.io/php-sru-client/)
