<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'vhhecommerce' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'vhhecommerce.com' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

if ( !defined('WP_CLI') ) {
    define( 'WP_SITEURL', $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
    define( 'WP_HOME',    $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] );
}



/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'cuKT0VWZjZXiUE3l5x2oIpNQVvzJqAnhRF7Z4fIyUhoykfT613agEqnzDIzxDnwW' );
define( 'SECURE_AUTH_KEY',  '88KSoGnKunwuFOny349pkzZXjhgaaaVe0xWyl2xQBLkNGsI8hglbBpWckwvWAGgn' );
define( 'LOGGED_IN_KEY',    'Y65HP997ythvTxfw8LaFDYZlmMps2l9IBro6QUYTiwdTc0OUHNd9IE97xsdMazey' );
define( 'NONCE_KEY',        '0Dc5T2b2vMNZWFcnJVzbS3CKVq0AlfkZn0yM46lqVM0ZXLubpuu9GiQAAiU2jf6x' );
define( 'AUTH_SALT',        'mgcVujcpR6rChN8bb8nlu3WW0NRLG9fEBVLvym5FJUrEokf99xgw19EJlPgQpdFI' );
define( 'SECURE_AUTH_SALT', 'xoAU0sfVm8IUwxJicIeAKMXwtGKFIXsxMGjSLxIUxWmOlxKG3fwAN7wzHm6NGtd2' );
define( 'LOGGED_IN_SALT',   'Y3Hgz75JW3oXRdaltPJG9JJgetP1fet8JZ1gEDvsFjXA3mMOlYP8dUhzAg5hr3X3' );
define( 'NONCE_SALT',       '1mrs3CX58pocw47iuDk8Vm3vu9Njoms48syrKsCzGA8FYLpxstYgBo3BrHbdj5kL' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
// define( 'WP_HOME', 'https://vhhecommerce.com' );
// define( 'WP_SITEURL', 'https://vhhecommerce.com' );
