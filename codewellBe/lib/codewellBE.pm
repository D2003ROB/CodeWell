package codewellBE;
use Mojo::Base 'Mojolicious';

use codewellBE::Schema;

# This method will run once at server start
sub startup {
  my $self = shift;

  # Load configuration from hash returned by config file
  my $config = $self->plugin('Config');
  $self->plugin('Scrypt');

  # Configure the application
  $self->secrets($config->{secrets});

  # DB schema
  my $schema = codewellBE::Schema->connect('dbi:Pg:dbname=codewell');
  $self->helper(db => sub { return $schema; });

  $self->hook(before_dispatch => sub {
    my $c = shift;
  });

  # Router
  my $r = $self->routes;

  # Normal route to controller
  $r->get('/')->to('example#welcome');

  # Users
  $r->post('/api/register')->name('on_register')
    ->to('user#on_register');
}

1;
