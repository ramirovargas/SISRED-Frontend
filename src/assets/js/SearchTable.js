/**
 * Initialize the search table
 *
 * @returns void
 */
function setupTable() { 
  $('#search_table_resources').DataTable({
    'paging'      : true,
    'lengthChange': false,
    'searching'   : true,
    'ordering'    : true,
    'info'        : true,
    'autoWidth'   : false
  })
}
