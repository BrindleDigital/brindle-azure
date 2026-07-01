<?php
add_action('init', 'team_type');
function team_type() {
    $imagepath = get_stylesheet_directory_uri() . '/cpt/images/';
    $labels    = array(

        'name' => __('Team', 'brindle'),

        'singular_name' => __('Team', 'brindle'),

        'add_new' => __('Add New Team', 'brindle'),

        'add_new_item' => __('Add New Team', 'brindle'),

        'edit' => __('Edit', 'brindle'),

        'edit_item' => __('Edit Team', 'brindle'),

        'new_item' => __('New Team', 'brindle'),

        'view' => __('View Team', 'brindle'),

        'view_item' => __('View Team', 'brindle'),

        'search_items' => __('Search Team', 'brindle'),

        'not_found' => __('No Team found', 'brindle'),

        'not_found_in_trash' => __('No Team found in Trash', 'brindle'),

        'parent_item_colon' => ''

    );

    $args      = array(

        'labels' => $labels,

        'description' => 'This is the holding location for all Team',

        'public' => true,

        'publicly_queryable' => true,

        'exclude_from_search' => false,

        'show_ui' => true,

        'query_var' => true,

        'capability_type' => 'post',

        'rewrite' => true,

        'hierarchical' => true,

        'menu_position' => 5,
        'menu_icon'          => 'dashicons-groups',
        'show_in_rest' => true,
        'supports' => array( 'title','editor','excerpt','thumbnail')

    );

    register_post_type('team', $args);

}

?>