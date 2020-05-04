package codewellBE;
use Mojo::Base 'Mojolicious';

use codewellBE::Schema;

# This method will run once at server start
sub startup {
  my $self = shift;

  # Load configuration from hash returned by config file
  my $config = $self->plugin('Config');

  # Configure the application
  $self->secrets($config->{secrets});

  # DB schema
  my $schema = codewellBE::Schema->connect('dbi:Pg:dbname=codewell');
  $self->helper(db => sub { return $schema; });

  # Router
  my $r = $self->routes;

  # Normal route to controller
  $r->get('/')->to('example#welcome');
}

1;
