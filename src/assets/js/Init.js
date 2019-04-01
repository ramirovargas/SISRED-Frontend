/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
$(function () {
    /**
     * Get access to plugins
     */
    var $layout = $('body').data('lte.layout')

    /**
     * Retrieve default settings and apply them to the template
     *
     * @returns void
     */
    function setup() {   
        $layout.activate();
    }

    setup();
})
