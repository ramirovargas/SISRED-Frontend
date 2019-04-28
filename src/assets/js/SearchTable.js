/**
 * Initialize the search table
 *
 * @returns void
 */
function setupTable() { 
  $('#searchtable').DataTable({
    'paging'      : true,
    'lengthChange': false,
    'searching'   : true,
    'ordering'    : true,
    'info'        : true,
    'autoWidth'   : false
  })
}
