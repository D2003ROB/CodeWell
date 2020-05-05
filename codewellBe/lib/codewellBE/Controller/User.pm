package codewellBE::Controller::User;
use Mojo::Base 'Mojolicious::Controller';

use JSON::MaybeXS qw(decode_json);

use codewellBE::Helper::User;

sub on_register {
  my $self = shift;

  my $user_info = decode_json($self->req->body);
  $self->db->resultset('User')->create($user_info);

  my $success = 1;
  $success = 0 unless validate_password($user_info->password);

  $self->render(json => "{success: $success}");
}

1;