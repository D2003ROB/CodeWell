package codewellBE::Schema::ResultSet::User;

use base 'DBIx::Class::ResultSet';

use strict;
use warnings;

sub by_key {
  my ($self, $key, $value) = @_;
  return $self->search({ $key => $value });
}

1;
