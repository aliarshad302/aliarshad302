<?php
/**
 * iElectrician Child Theme Functions
 * Child theme of Hello Elementor
 */

if (!defined('ABSPATH')) exit;

/**
 * Enqueue parent + child styles
 */
function ielectrician_enqueue_styles() {
    wp_enqueue_style(
        'hello-elementor',
        get_template_directory_uri() . '/style.css',
        [],
        wp_get_theme('hello-elementor')->get('Version')
    );
    wp_enqueue_style(
        'ielectrician-style',
        get_stylesheet_uri(),
        ['hello-elementor'],
        wp_get_theme()->get('Version')
    );
}
add_action('wp_enqueue_scripts', 'ielectrician_enqueue_styles');

/**
 * Register navigation menus
 */
function ielectrician_register_menus() {
    register_nav_menus([
        'primary'  => __('Primary Menu', 'ielectrician'),
        'footer-services' => __('Footer - Services', 'ielectrician'),
        'footer-areas'    => __('Footer - Service Areas', 'ielectrician'),
        'footer-company'  => __('Footer - Company', 'ielectrician'),
    ]);
}
add_action('after_setup_theme', 'ielectrician_register_menus');

/**
 * Add JSON-LD Electrician schema to homepage
 */
function ielectrician_schema_markup() {
    if (is_front_page()) {
        $schema = [
            '@context' => 'https://schema.org',
            '@type'    => 'Electrician',
            'name'     => 'iElectrician',
            'url'      => home_url('/'),
            'telephone' => '(800) 555-0199',
            'email'     => 'info@ielectrician.org',
            'description' => 'Professional residential and commercial electrician services throughout California. Licensed, insured, and available 24/7 for emergency electrical work.',
            'areaServed' => [
                '@type' => 'State',
                'name'  => 'California',
            ],
            'openingHoursSpecification' => [
                '@type'     => 'OpeningHoursSpecification',
                'dayOfWeek' => ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                'opens'     => '00:00',
                'closes'    => '23:59',
            ],
        ];
        echo '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>' . "\n";
    }
}
add_action('wp_head', 'ielectrician_schema_markup');

/**
 * Add FAQ schema to pages that use the [faq_schema] shortcode
 * Usage: [faq_schema] at the bottom of any page with FAQs
 */
function ielectrician_faq_schema_shortcode($atts, $content = '') {
    if (empty($content)) return '';

    $faqs = json_decode($content, true);
    if (!is_array($faqs)) return '';

    $schema = [
        '@context'   => 'https://schema.org',
        '@type'      => 'FAQPage',
        'mainEntity' => [],
    ];

    foreach ($faqs as $faq) {
        $schema['mainEntity'][] = [
            '@type' => 'Question',
            'name'  => $faq['question'],
            'acceptedAnswer' => [
                '@type' => 'Answer',
                'text'  => $faq['answer'],
            ],
        ];
    }

    return '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . '</script>';
}
add_shortcode('faq_schema', 'ielectrician_faq_schema_shortcode');

/**
 * Add theme support
 */
function ielectrician_theme_support() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
}
add_action('after_setup_theme', 'ielectrician_theme_support');

/**
 * Customize excerpt length
 */
function ielectrician_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'ielectrician_excerpt_length');

/**
 * Allow SVG uploads
 */
function ielectrician_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'ielectrician_mime_types');
