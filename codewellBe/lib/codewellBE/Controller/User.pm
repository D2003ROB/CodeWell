package codewellBE::Controller::User;
use Mojo::Base 'Mojolicious::Controller';

use JSON::MaybeXS qw(decode_json);

use codewellBE::Helper::User;

sub on_login {
  my $self = shift;
  my $user_info = decode_json($self->req->body);

  my $user = $self->db->resultset('User')->by_key('id', $user_info->{id})
    ->first;

  my $success = 0;
  if ($user && $self->scrypt_verify($user_info->{password}, $user->password)) {
    $success = 1;
    $self->session(logged_in => 1);
  }

  $self->render(json => { success => $success });
}

sub on_register {
  my $self = shift;

  my $user_info = decode_json($self->req->body);

  my $success = 1;
  $success = 0 unless validate_password($user_info->{password});

  $user_info->{password} = $self->scrypt($user_info->{password});

  $self->db->resultset('User')->create($user_info) if $success;

  $self->render(json => "{success: $success}");
}

1;
