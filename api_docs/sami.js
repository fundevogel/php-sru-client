
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">Scriptotek</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Scriptotek_Sru" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Scriptotek/Sru.html">Sru</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Scriptotek_Sru_Exceptions" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Scriptotek/Sru/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Scriptotek_Sru_Exceptions_InvalidResponseException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scriptotek/Sru/Exceptions/InvalidResponseException.html">InvalidResponseException</a>                    </div>                </li>                            <li data-name="class:Scriptotek_Sru_Exceptions_SruErrorException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scriptotek/Sru/Exceptions/SruErrorException.html">SruErrorException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Scriptotek_Sru_Facades" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Scriptotek/Sru/Facades.html">Facades</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Scriptotek_Sru_Facades_SruClient" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scriptotek/Sru/Facades/SruClient.html">SruClient</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Scriptotek_Sru_Providers" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Scriptotek/Sru/Providers.html">Providers</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Scriptotek_Sru_Providers_SruServiceProvider" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Scriptotek/Sru/Providers/SruServiceProvider.html">SruServiceProvider</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Scriptotek_Sru_Client" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Scriptotek/Sru/Client.html">Client</a>                    </div>                </li>                            <li data-name="class:Scriptotek_Sru_ExplainResponse" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Scriptotek/Sru/ExplainResponse.html">ExplainResponse</a>                    </div>                </li>                            <li data-name="class:Scriptotek_Sru_Record" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Scriptotek/Sru/Record.html">Record</a>                    </div>                </li>                            <li data-name="class:Scriptotek_Sru_Records" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Scriptotek/Sru/Records.html">Records</a>                    </div>                </li>                            <li data-name="class:Scriptotek_Sru_Response" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Scriptotek/Sru/Response.html">Response</a>                    </div>                </li>                            <li data-name="class:Scriptotek_Sru_ResponseInterface" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Scriptotek/Sru/ResponseInterface.html">ResponseInterface</a>                    </div>                </li>                            <li data-name="class:Scriptotek_Sru_SearchRetrieveResponse" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Scriptotek/Sru/SearchRetrieveResponse.html">SearchRetrieveResponse</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Scriptotek.html", "name": "Scriptotek", "doc": "Namespace Scriptotek"},{"type": "Namespace", "link": "Scriptotek/Sru.html", "name": "Scriptotek\\Sru", "doc": "Namespace Scriptotek\\Sru"},{"type": "Namespace", "link": "Scriptotek/Sru/Exceptions.html", "name": "Scriptotek\\Sru\\Exceptions", "doc": "Namespace Scriptotek\\Sru\\Exceptions"},{"type": "Namespace", "link": "Scriptotek/Sru/Facades.html", "name": "Scriptotek\\Sru\\Facades", "doc": "Namespace Scriptotek\\Sru\\Facades"},{"type": "Namespace", "link": "Scriptotek/Sru/Providers.html", "name": "Scriptotek\\Sru\\Providers", "doc": "Namespace Scriptotek\\Sru\\Providers"},
            {"type": "Interface", "fromName": "Scriptotek\\Sru", "fromLink": "Scriptotek/Sru.html", "link": "Scriptotek/Sru/ResponseInterface.html", "name": "Scriptotek\\Sru\\ResponseInterface", "doc": "&quot;Interface defining data objects that hold the information of an SRU response&quot;"},
                                                        {"type": "Method", "fromName": "Scriptotek\\Sru\\ResponseInterface", "fromLink": "Scriptotek/Sru/ResponseInterface.html", "link": "Scriptotek/Sru/ResponseInterface.html#method___construct", "name": "Scriptotek\\Sru\\ResponseInterface::__construct", "doc": "&quot;Create a new response&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\ResponseInterface", "fromLink": "Scriptotek/Sru/ResponseInterface.html", "link": "Scriptotek/Sru/ResponseInterface.html#method_asXml", "name": "Scriptotek\\Sru\\ResponseInterface::asXml", "doc": "&quot;Get the raw xml response&quot;"},
            
            
            {"type": "Class", "fromName": "Scriptotek\\Sru", "fromLink": "Scriptotek/Sru.html", "link": "Scriptotek/Sru/Client.html", "name": "Scriptotek\\Sru\\Client", "doc": "&quot;SRU client&quot;"},
                                                        {"type": "Method", "fromName": "Scriptotek\\Sru\\Client", "fromLink": "Scriptotek/Sru/Client.html", "link": "Scriptotek/Sru/Client.html#method___construct", "name": "Scriptotek\\Sru\\Client::__construct", "doc": "&quot;Create a new client&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Client", "fromLink": "Scriptotek/Sru/Client.html", "link": "Scriptotek/Sru/Client.html#method_urlTo", "name": "Scriptotek\\Sru\\Client::urlTo", "doc": "&quot;Construct the URL for a CQL query&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Client", "fromLink": "Scriptotek/Sru/Client.html", "link": "Scriptotek/Sru/Client.html#method_getHttpOptions", "name": "Scriptotek\\Sru\\Client::getHttpOptions", "doc": "&quot;Get HTTP client configuration options (authentication, proxy, headers)&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Client", "fromLink": "Scriptotek/Sru/Client.html", "link": "Scriptotek/Sru/Client.html#method_search", "name": "Scriptotek\\Sru\\Client::search", "doc": "&quot;Perform a searchRetrieve request&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Client", "fromLink": "Scriptotek/Sru/Client.html", "link": "Scriptotek/Sru/Client.html#method_all", "name": "Scriptotek\\Sru\\Client::all", "doc": "&quot;Perform a searchRetrieve request and return an iterator over the records&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Client", "fromLink": "Scriptotek/Sru/Client.html", "link": "Scriptotek/Sru/Client.html#method_records", "name": "Scriptotek\\Sru\\Client::records", "doc": "&quot;Alias for &lt;code&gt;all()&lt;\/code&gt;&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Client", "fromLink": "Scriptotek/Sru/Client.html", "link": "Scriptotek/Sru/Client.html#method_first", "name": "Scriptotek\\Sru\\Client::first", "doc": "&quot;Perform a searchRetrieve request and return first record&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Client", "fromLink": "Scriptotek/Sru/Client.html", "link": "Scriptotek/Sru/Client.html#method_explain", "name": "Scriptotek\\Sru\\Client::explain", "doc": "&quot;Perform an explain request&quot;"},
            
            {"type": "Class", "fromName": "Scriptotek\\Sru\\Exceptions", "fromLink": "Scriptotek/Sru/Exceptions.html", "link": "Scriptotek/Sru/Exceptions/InvalidResponseException.html", "name": "Scriptotek\\Sru\\Exceptions\\InvalidResponseException", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Scriptotek\\Sru\\Exceptions\\InvalidResponseException", "fromLink": "Scriptotek/Sru/Exceptions/InvalidResponseException.html", "link": "Scriptotek/Sru/Exceptions/InvalidResponseException.html#method___construct", "name": "Scriptotek\\Sru\\Exceptions\\InvalidResponseException::__construct", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Scriptotek\\Sru\\Exceptions", "fromLink": "Scriptotek/Sru/Exceptions.html", "link": "Scriptotek/Sru/Exceptions/SruErrorException.html", "name": "Scriptotek\\Sru\\Exceptions\\SruErrorException", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Scriptotek\\Sru\\Exceptions\\SruErrorException", "fromLink": "Scriptotek/Sru/Exceptions/SruErrorException.html", "link": "Scriptotek/Sru/Exceptions/SruErrorException.html#method___construct", "name": "Scriptotek\\Sru\\Exceptions\\SruErrorException::__construct", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Scriptotek\\Sru", "fromLink": "Scriptotek/Sru.html", "link": "Scriptotek/Sru/ExplainResponse.html", "name": "Scriptotek\\Sru\\ExplainResponse", "doc": "&quot;Explain response&quot;"},
                                                        {"type": "Method", "fromName": "Scriptotek\\Sru\\ExplainResponse", "fromLink": "Scriptotek/Sru/ExplainResponse.html", "link": "Scriptotek/Sru/ExplainResponse.html#method___construct", "name": "Scriptotek\\Sru\\ExplainResponse::__construct", "doc": "&quot;Create a new explain response&quot;"},
            
            {"type": "Class", "fromName": "Scriptotek\\Sru\\Facades", "fromLink": "Scriptotek/Sru/Facades.html", "link": "Scriptotek/Sru/Facades/SruClient.html", "name": "Scriptotek\\Sru\\Facades\\SruClient", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Scriptotek\\Sru\\Providers", "fromLink": "Scriptotek/Sru/Providers.html", "link": "Scriptotek/Sru/Providers/SruServiceProvider.html", "name": "Scriptotek\\Sru\\Providers\\SruServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Scriptotek\\Sru\\Providers\\SruServiceProvider", "fromLink": "Scriptotek/Sru/Providers/SruServiceProvider.html", "link": "Scriptotek/Sru/Providers/SruServiceProvider.html#method_boot", "name": "Scriptotek\\Sru\\Providers\\SruServiceProvider::boot", "doc": "&quot;Bootstrap the application events.&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Providers\\SruServiceProvider", "fromLink": "Scriptotek/Sru/Providers/SruServiceProvider.html", "link": "Scriptotek/Sru/Providers/SruServiceProvider.html#method_register", "name": "Scriptotek\\Sru\\Providers\\SruServiceProvider::register", "doc": "&quot;Register the service provider.&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Providers\\SruServiceProvider", "fromLink": "Scriptotek/Sru/Providers/SruServiceProvider.html", "link": "Scriptotek/Sru/Providers/SruServiceProvider.html#method_provides", "name": "Scriptotek\\Sru\\Providers\\SruServiceProvider::provides", "doc": "&quot;Get the services provided by the provider.&quot;"},
            
            {"type": "Class", "fromName": "Scriptotek\\Sru", "fromLink": "Scriptotek/Sru.html", "link": "Scriptotek/Sru/Record.html", "name": "Scriptotek\\Sru\\Record", "doc": "&quot;Single record from a SRU response&quot;"},
                                                        {"type": "Method", "fromName": "Scriptotek\\Sru\\Record", "fromLink": "Scriptotek/Sru/Record.html", "link": "Scriptotek/Sru/Record.html#method___construct", "name": "Scriptotek\\Sru\\Record::__construct", "doc": "&quot;Create a new record&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Record", "fromLink": "Scriptotek/Sru/Record.html", "link": "Scriptotek/Sru/Record.html#method_make", "name": "Scriptotek\\Sru\\Record::make", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Scriptotek\\Sru", "fromLink": "Scriptotek/Sru.html", "link": "Scriptotek/Sru/Records.html", "name": "Scriptotek\\Sru\\Records", "doc": "&quot;When iterating, methods are called in the following order:&quot;"},
                                                        {"type": "Method", "fromName": "Scriptotek\\Sru\\Records", "fromLink": "Scriptotek/Sru/Records.html", "link": "Scriptotek/Sru/Records.html#method___construct", "name": "Scriptotek\\Sru\\Records::__construct", "doc": "&quot;Create a new records iterator&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Records", "fromLink": "Scriptotek/Sru/Records.html", "link": "Scriptotek/Sru/Records.html#method_numberOfRecords", "name": "Scriptotek\\Sru\\Records::numberOfRecords", "doc": "&quot;Return the number of records&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Records", "fromLink": "Scriptotek/Sru/Records.html", "link": "Scriptotek/Sru/Records.html#method_current", "name": "Scriptotek\\Sru\\Records::current", "doc": "&quot;Return the current element&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Records", "fromLink": "Scriptotek/Sru/Records.html", "link": "Scriptotek/Sru/Records.html#method_key", "name": "Scriptotek\\Sru\\Records::key", "doc": "&quot;Return the key of the current element&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Records", "fromLink": "Scriptotek/Sru/Records.html", "link": "Scriptotek/Sru/Records.html#method_rewind", "name": "Scriptotek\\Sru\\Records::rewind", "doc": "&quot;Rewind the Iterator to the first element&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Records", "fromLink": "Scriptotek/Sru/Records.html", "link": "Scriptotek/Sru/Records.html#method_next", "name": "Scriptotek\\Sru\\Records::next", "doc": "&quot;Move forward to next element&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Records", "fromLink": "Scriptotek/Sru/Records.html", "link": "Scriptotek/Sru/Records.html#method_valid", "name": "Scriptotek\\Sru\\Records::valid", "doc": "&quot;Check if current position is valid&quot;"},
            
            {"type": "Class", "fromName": "Scriptotek\\Sru", "fromLink": "Scriptotek/Sru.html", "link": "Scriptotek/Sru/Response.html", "name": "Scriptotek\\Sru\\Response", "doc": "&quot;Generic SRU response&quot;"},
                                                        {"type": "Method", "fromName": "Scriptotek\\Sru\\Response", "fromLink": "Scriptotek/Sru/Response.html", "link": "Scriptotek/Sru/Response.html#method___construct", "name": "Scriptotek\\Sru\\Response::__construct", "doc": "&quot;Create a new response&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\Response", "fromLink": "Scriptotek/Sru/Response.html", "link": "Scriptotek/Sru/Response.html#method_asXml", "name": "Scriptotek\\Sru\\Response::asXml", "doc": "&quot;Get the raw xml response&quot;"},
            
            {"type": "Class", "fromName": "Scriptotek\\Sru", "fromLink": "Scriptotek/Sru.html", "link": "Scriptotek/Sru/ResponseInterface.html", "name": "Scriptotek\\Sru\\ResponseInterface", "doc": "&quot;Interface defining data objects that hold the information of an SRU response&quot;"},
                                                        {"type": "Method", "fromName": "Scriptotek\\Sru\\ResponseInterface", "fromLink": "Scriptotek/Sru/ResponseInterface.html", "link": "Scriptotek/Sru/ResponseInterface.html#method___construct", "name": "Scriptotek\\Sru\\ResponseInterface::__construct", "doc": "&quot;Create a new response&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\ResponseInterface", "fromLink": "Scriptotek/Sru/ResponseInterface.html", "link": "Scriptotek/Sru/ResponseInterface.html#method_asXml", "name": "Scriptotek\\Sru\\ResponseInterface::asXml", "doc": "&quot;Get the raw xml response&quot;"},
            
            {"type": "Class", "fromName": "Scriptotek\\Sru", "fromLink": "Scriptotek/Sru.html", "link": "Scriptotek/Sru/SearchRetrieveResponse.html", "name": "Scriptotek\\Sru\\SearchRetrieveResponse", "doc": "&quot;SearchRetrieve response, containing a list of records or some error&quot;"},
                                                        {"type": "Method", "fromName": "Scriptotek\\Sru\\SearchRetrieveResponse", "fromLink": "Scriptotek/Sru/SearchRetrieveResponse.html", "link": "Scriptotek/Sru/SearchRetrieveResponse.html#method___construct", "name": "Scriptotek\\Sru\\SearchRetrieveResponse::__construct", "doc": "&quot;Create a new searchRetrieve response&quot;"},
                    {"type": "Method", "fromName": "Scriptotek\\Sru\\SearchRetrieveResponse", "fromLink": "Scriptotek/Sru/SearchRetrieveResponse.html", "link": "Scriptotek/Sru/SearchRetrieveResponse.html#method_next", "name": "Scriptotek\\Sru\\SearchRetrieveResponse::next", "doc": "&quot;Request next batch of records in the result set, or return null if we&#039;re at the end of the set&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


