package codewellBE::Schema::Result::User;
use base qw/DBIx::Class::Core/;

__PACKAGE__->table('users');

__PACKAGE__->add_columns(
  id => {
    data_type => 'text',
  },
);
__PACKAGE__->set_primary_key('id');

1;
