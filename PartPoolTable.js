
/*
var PartPoolHeader = [
    "ID",
    "Bag-Size",
    "Kategory",
    "Beschreibung",
    "Orcad-Name",
    "Hersteller",
    "Hersteller-Bezeichnung",
    "Versender",
    "Best.Nr",
    "Footprint",
    "PDF",
    "Preis/Stk",
    "Bestand",
    "Verfügbarkeit"
];
*/
var PartPoolConfig = [
    {JsonName: "ID"},
    {JsonName: "Bag-Size"},
    {JsonName: "Kategory"},
    {JsonName: "Beschreibung"},
    {JsonName: "Orcad-Name"},
    {JsonName: "Hersteller"},
    {JsonName: "Hersteller-Bezeichnung"},
    {JsonName: "Versender"},
    {JsonName: "Best.Nr"},
    {JsonName: "Footprint"},
    {JsonName: "PDF", ColType: "FileLink"},
    {JsonName: "Preis / Stück"},
    {JsonName: "Bestand"},
    {JsonName: "Verfügbarkeit"}
];
var $table;
function sortTable() {
  $table = $('table').tablesorter({
    theme: 'blue',
    widgets: ["zebra", "filter"],
    widgetOptions : {
      // filter_anyMatch replaced! Instead use the filter_external option
      // Set to use a jQuery selector (or jQuery object) pointing to the
      // external filter (column specific or any match)
      filter_external : '.search',
      // add a default type search to the first name column
      filter_defaultFilter: { 1 : '~{query}' },
      // include column filters
      filter_columnFilters: true,
      filter_placeholder: { search : 'Search...' },
      filter_saveFilters : true,
      filter_reset: '.reset'
    }
  });
}
