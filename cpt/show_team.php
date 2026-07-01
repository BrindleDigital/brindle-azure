    <div class="team-grid-container">
      <?php
            $perPage = -1;
            $loop = query_posts(array(
            'post_type' => 'team',
            'post_status' => 'publish',
            'posts_per_page' => $perPage,
            'orderby'   => 'post_date',
            'order' => 'ASC',
            'paged' => $paged)
            );

            if (have_posts()):
            while (have_posts()) : the_post();
            $post_id      = get_the_ID();
            $post_link    = get_permalink($post_id);
            $post_image   = wp_get_attachment_url( get_post_thumbnail_id($post_id) );          
            $content = apply_filters( 'the_content', get_the_content() );  
            $select_background = '';
            $select_background = strtolower($select_background);
            ?> 
            <figure >
              <a href="" class="btn-popup" data-target="modal-<?php echo $post_id;?>"></a>
              <div class="team-image-outer">
                <img src="<?php echo $post_image;?>" alt="<?php the_title();?>" class="team-img" />
              </div>
              <figcaption class="team-info">
                <h6 class="team-info-title"><?php the_title();?></h6>
                <div class="team-info-position"><?php echo strip_tags(get_the_excerpt()); ?></div>
              </figcaption>
            </figure>
      <?php 
      endwhile;endif;
      wp_reset_query();
      ?>      
    </div>

    <?php
    $perPage = -1;
    $loop = query_posts(array(
    'post_type' => 'team',
    'post_status' => 'publish',
    'posts_per_page' => $perPage,
    'orderby'   => 'post_date',
    'order' => 'ASC',
    'paged' => $paged)
    );

    if (have_posts()):
    while (have_posts()) : the_post();
    $post_id      = get_the_ID();
    $post_link    = get_permalink($post_id); 
    $post_image   = wp_get_attachment_url( get_post_thumbnail_id($post_id) );          
    $content = apply_filters( 'the_content', get_the_content() ); 
    ?> 
        <div class="modal" id="modal-<?php echo $post_id;?>" style="display: none;">
          <div class="modal-dialog">
            <button class="btn-close"></button>
            <figure class="">
              <img
              src="<?php echo $post_image;?>"
              alt="<?php the_title();?>" />
            </figure>
            <article>
              <h6 class="team-info-title"><?php the_title();?></h6>
              <div class="team-info-position"><?php echo strip_tags(get_the_excerpt()); ?></div>
              <div class="team-info-details"><?php the_content();?></div>
            </article>
          </div>
        </div>
    <?php 
    endwhile;endif;
    wp_reset_query();
    ?> 